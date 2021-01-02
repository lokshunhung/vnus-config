import type { Linter } from 'eslint';

// ✅ Recommended
// 🔧 Fixable

// ✨ Customized
// 🛑 Disabled

const rulesStylisticIssues: Linter.Config = {
    rules: {
        // ✨ disallow `Array` constructors
        'no-array-constructor': ['error'],

        // ✅ disallow mixed spaces and tabs for indentation
        'no-mixed-spaces-and-tabs': ['error'],

        // ✨ disallow `Object` constructors
        'no-new-object': ['error'],

        // ✨  disallow certain syntax forms (adapted from airbnb style guide)
        'no-restricted-syntax': [
            'error',
            {
                selector: 'ForInStatement',
                message:
                    'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
            },
            {
                selector: 'WithStatement',
                message:
                    '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
            },
        ],
    },
};

export default rulesStylisticIssues;
