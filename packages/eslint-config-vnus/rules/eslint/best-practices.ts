import type { Linter } from 'eslint';

// ✅ Recommended
// 🔧 Fixable

// ✨ Customized
// 🛑 Disabled

const rulesBestPractices: Linter.Config = {
    rules: {
        // ✨ 🔧 require the use of `===` and `!==`; only allow `variable == null` (checks `null`, `undefined`)
        eqeqeq: ['error', 'always', { null: 'ignore' }],

        // ✅ disallow lexical declarations in case clauses
        'no-case-declarations': ['error'],

        // ✅ disallow empty destructuring patterns
        'no-empty-pattern': ['error'],

        // ✨ disallow the use of `eval()`
        'no-eval': ['error', { allowIndirect: true }],

        // ✨ 🔧 disallow unnecessary calls to `.bind()`
        'no-extra-bind': ['error'],

        // ✅ disallow fallthrough of `case` statements
        'no-fallthrough': ['error'],

        // ✨ 🔧 disallow shorthand type conversions
        'no-implicit-coercion': ['error', { boolean: false, number: true, string: true, allow: [] }],

        // ✨ disallow the use of `eval()`-like methods
        'no-implied-eval': ['error'],

        // ✨ disallow the use of the `__iterator__` property
        'no-iterator': ['error'],

        // ✅ disallow assignments to native objects or read-only global variables
        'no-global-assign': ['error'],

        // ✅ disallow `new` operators with the `String`, `Number`, and `Boolean` objects
        'no-new-wrappers': ['error'],

        // ✅ disallow octal literals
        'no-octal': ['error'],

        // ✨ disallow octal escape sequences in string literals
        'no-octal-escape': ['error'],

        // ✨ disallow the use of the `__proto__` property; see: https://exploringjs.com/es6/ch_oop-besides-classes.html#_the-two-kinds-of-proto-in-ecmascript-6
        'no-proto': ['error'],

        // ✅ disallow variable redeclaration
        'no-redeclare': ['error'],

        // disallow certain properties on certain objects
        'no-restricted-properties': [
            'error',
            {
                object: 'global',
                property: 'isFinite',
                message: 'Please use Number.isFinite instead',
            },
            {
                object: 'self',
                property: 'isFinite',
                message: 'Please use Number.isFinite instead',
            },
            {
                object: 'window',
                property: 'isFinite',
                message: 'Please use Number.isFinite instead',
            },
            {
                object: 'global',
                property: 'isNaN',
                message: 'Please use Number.isNaN instead',
            },
            {
                object: 'self',
                property: 'isNaN',
                message: 'Please use Number.isNaN instead',
            },
            {
                object: 'window',
                property: 'isNaN',
                message: 'Please use Number.isNaN instead',
            },
            {
                object: 'Math',
                property: 'pow',
                message: 'Use the exponentiation operator (**) instead.',
            },
            {
                object: 'require',
                property: 'ensure',
                message: 'Please use import() instead.',
            },
        ],

        // ✅ disallow assignments where both sides are exactly the same
        'no-self-assign': ['error'],

        // ✨ disallow throwing literals as exceptions
        'no-throw-literal': ['error'],

        // ✨ ✅ 🔧 warn on unused labels
        'no-unused-labels': ['warn'],

        // ✅ disallow unnecessary `catch` clauses
        'no-useless-catch': ['error'],

        // ✅ disallow unnecessary escape characters
        'no-useless-escape': ['error'],

        // ✅ disallow `with` statements
        'no-with': ['error'],

        // ✨ enforce the consistent use of the radix argument when using `parseInt()`
        radix: ['error'],

        // ✨ 🔧 disallow "Yoda" conditions, except range like `0 < x && x <= 10`
        yoda: ['error', 'never', { exceptRange: true }],
    },
};

export default rulesBestPractices;
