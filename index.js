var stylelint = require('stylelint');
var _ = require('lodash');
var valueParser = require('postcss-value-parser');

var ruleName = 'plugin/value-list-box-shadow-inset-first';

var messages = stylelint.utils.ruleMessages(ruleName, {
	expected: 'Expected box-shadow inset values to be first in the value list.'
});

module.exports = stylelint.createPlugin(ruleName, function ( bool ) {

	return function ( cssRoot, result ) {

		var validOptions = stylelint.utils.validateOptions(result, ruleName, {
			actual: bool
		});

		if ( !validOptions ) {
			return;
		}

		cssRoot.walkDecls('box-shadow', function ( decl ) {

			var list = [];
			var inputOrder = [];
			var correctOrder = [];

			valueParser(decl.value).walk(function ( node ) {
				if ( node.type === 'function' ) {
					return false;
				}
				if ( node.value === 'inset' || node.value === ',' ) {
					list.push(node.value);
				}
			});

			inputOrder = list.map(function ( item ) {
				if ( item === ',' ) {
					return 'normal';
				}
				return item;
			});
			correctOrder = [].concat(inputOrder).sort();

			if ( !_.isEqual(inputOrder, correctOrder) ) {
				stylelint.utils.report({
					ruleName: ruleName,
					result: result,
					node: decl,
					message: messages.expected
				});
			}


		});

	};

});

module.exports.ruleName = ruleName;
module.exports.messages = messages;
