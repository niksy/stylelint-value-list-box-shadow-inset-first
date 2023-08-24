import function_ from '../index.js';
import { runCodeTest } from './util/index.js';

const { rule, ruleName, messages } = function_;

runCodeTest({
	ruleName: ruleName,
	config: true,

	accept: [
		{
			input: 'a { box-shadow:inset 1px 1px 1px #fff, 2px 2px 2px rgba(0,0,0,1), 3px 3px 3px yellow; }',
			result: []
		}
	],
	reject: [
		{
			input: 'a { box-shadow:2px 2px 2px rgba(0,0,0,1), inset 1px 1px 1px #fff, 3px 3px 3px yellow; }',
			result: [
				{
					column: 5,
					line: 1,
					endColumn: 86,
					endLine: 1,
					text: messages.expected
				}
			]
		}
	]
});
