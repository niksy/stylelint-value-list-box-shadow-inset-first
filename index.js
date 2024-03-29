import stylelint from 'stylelint';
import isEqual from 'lodash.isequal';
import valueParser from 'postcss-value-parser';

const ruleName = 'plugin/value-list-box-shadow-inset-first';

const messages = stylelint.utils.ruleMessages(ruleName, {
	expected: 'Expected box-shadow inset values to be first in the value list.'
});

/**
 * @type  {stylelint.RuleBase}
 */
function ruleFunction(/** @type boolean*/ bool) {
	return function (cssRoot, result) {
		const validOptions = stylelint.utils.validateOptions(result, ruleName, {
			actual: bool
		});

		if (!validOptions) {
			return;
		}

		cssRoot.walkDecls('box-shadow', (decl) => {
			/** @type {string[]} */
			const list = [];

			valueParser(decl.value).walk((node) => {
				if (node.type === 'function') {
					return false;
				}
				if (node.value === 'inset' || node.value === ',') {
					list.push(node.value);
				}
			});

			const inputOrder = list.map((item) => {
				if (item === ',') {
					return 'normal';
				}
				return item;
			});
			const correctOrder = [...inputOrder].sort();

			if (!isEqual(inputOrder, correctOrder)) {
				stylelint.utils.report({
					ruleName: ruleName,
					result: result,
					node: decl,
					message: messages.expected
				});
			}
		});
	};
}

// @ts-ignore
const plugin = stylelint.createPlugin(ruleName, ruleFunction);

export default { ...plugin, messages };
