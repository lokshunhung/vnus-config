// @ts-expect-error -- untyped module
import confusingBrowserGlobals from 'confusing-browser-globals';
import type { Linter } from 'eslint';

// ✅ Recommended
// 🔧 Fixable

// ✨ Customized
// 🛑 Disabled

const rulesVariables: Linter.Config = {
    rules: {
        // ✅ disallow deleting variables
        'no-delete-var': ['error'],

        // ✨ disallow specified global variables
        'no-restricted-globals': [
            'error',
            {
                name: 'isFinite',
                message: 'Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite',
            },
            {
                name: 'isNaN',
                message: 'Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan',
            },
            ...confusingBrowserGlobals,
        ],

        // ✨ disallow variable declarations from shadowing variables declared in the outer scope; re-disabled by "@typescript-eslint/no-shadow"
        'no-shadow': ['error'],

        // ✅ disallow identifiers from shadowing restricted names
        'no-shadow-restricted-names': ['error'],

        // 🛑 ✅ too annoying; also checked by typescript
        'no-undef': 'off',

        // ✨ ✅ disallow unused variables; re-disabled by "@typescript-eslint/no-unused-vars"
        'no-unused-vars': ['error', { args: 'none', ignoreRestSiblings: true, varsIgnorePattern: '^_+$' }],

        // ✨ ✅ disallow the use of variables before they are defined; re-disabled by "@typescript-eslint/no-use-before-define"
        'no-use-before-define': [
            'error',
            {
                functions: false,
                classes: true,
                variables: true,
            },
        ],
    },
};

export default rulesVariables;
