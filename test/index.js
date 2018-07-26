import test from 'stylelint-test-rule-tape';
import fn from '../index';

const { rule, ruleName, messages } = fn;

test(rule, {
	ruleName: ruleName,
	config: true,
	skipBasicChecks: true,

	accept: [
		{
			code: 'a { box-shadow:inset 1px 1px 1px #fff, 2px 2px 2px rgba(0,0,0,1), 3px 3px 3px yellow; }'
		}
	],
	reject: [
		{
			code: 'a { box-shadow:2px 2px 2px rgba(0,0,0,1), inset 1px 1px 1px #fff, 3px 3px 3px yellow; }',
			message: messages.expected
		}
	]
});
