import type { Linter } from 'eslint';

// ✅ Recommended
// 🔧 Fixable
// 💭 Requires type information

// ✨ Customized
// 🛑 Disabled

const config: Linter.Config = {
    rules: {
        // ✅ 🔧 💭 disallows awaiting a value that is not a Thenable
        '@typescript-eslint/await-thenable': ['error'],

        // ✨ 🔧 💭 requires expressions of type void to appear in statement position
        '@typescript-eslint/no-confusing-void-expression': [
            'error',
            { ignoreArrowShorthand: true, ignoreVoidOperator: true },
        ],

        // ✅ 🔧 💭 requires Promise-like values to be handled appropriately
        '@typescript-eslint/no-floating-promises': ['error'],

        // ✅ 🔧 💭 disallows iterating over an array with a for-in loop
        '@typescript-eslint/no-for-in-array': ['error'],

        // ✅ 💭 avoid using promises in places not designed to handle them
        '@typescript-eslint/no-misused-promises': ['error'],

        // ✨ 🔧 💭 prevents conditionals where the type is always truthy or always falsy
        '@typescript-eslint/no-unnecessary-condition': ['error'],

        // ✨ 🔧 💭 enforces that type arguments will not be used if not required
        '@typescript-eslint/no-unnecessary-type-arguments': ['error'],

        // ✅ 🔧 💭 warns if a type assertion does not change the type of an expression
        '@typescript-eslint/no-unnecessary-type-assertion': ['error'],

        // 🛑 ✅ 💭 too annoying; allows assigning any to variables and properties
        '@typescript-eslint/no-unsafe-assignment': 'off',

        // 🛑 ✅ 💭 too annoying; allows calling an any type value
        '@typescript-eslint/no-unsafe-call': 'off',

        // 🛑 ✅ 💭 too annoying; allows member access on any typed variables
        '@typescript-eslint/no-unsafe-member-access': 'off',

        // 🛑 ✅ 💭 too annoying; allows returning any from a function
        '@typescript-eslint/no-unsafe-return': 'off',

        // ✨ 🔧 💭 requires that private members are marked as readonly if they're never modified outside of the constructor
        '@typescript-eslint/prefer-readonly': ['error'],

        // ✨ 💭 requires that private members are marked as readonly if they're never modified outside of the constructor
        '@typescript-eslint/prefer-readonly-parameter-types': [
            'error',
            { checkParameterProperties: false, ignoreInferredTypes: true },
        ],

        // ✨ 🔧 💭 prefers using type parameter when calling Array#reduce instead of casting
        '@typescript-eslint/prefer-reduce-type-parameter': ['error'],

        // ✅ 💭 enforces that RegExp#exec is used instead of String#match if no global flag is provided
        '@typescript-eslint/prefer-regexp-exec': ['error'],

        // ✨ 🔧 💭 enforces the use of String#startsWith and String#endsWith instead of other equivalent methods of checking substrings
        '@typescript-eslint/prefer-string-starts-ends-with': ['error'],

        // ✅ 💭 when adding two variables, operands must both be of type number or of type string
        '@typescript-eslint/restrict-plus-operands': ['error'],

        // ✅ 💭 enforces template literal expressions to be of string type
        '@typescript-eslint/restrict-template-expressions': ['error'],

        // ✨ 💭 restricts the types allowed in boolean expressions
        '@typescript-eslint/strict-boolean-expressions': ['error'],

        // ✨ 💭 exhaustiveness checking in switch with union type
        '@typescript-eslint/switch-exhaustiveness-check': ['error'],

        // ✅ 💭 enforces unbound methods are called with their expected scope
        '@typescript-eslint/unbound-method': ['error'],

        //
        // Extension Rules
        //

        // ✅ 💭 disallows the use of eval()-like methods
        '@typescript-eslint/no-implied-eval': ['error'],
        'no-implied-eval': 'off',

        // ✨ disallow throwing literals as exceptions
        '@typescript-eslint/no-throw-literal': ['error'],
        'no-throw-literal': 'off',

        // ✅ 💭 disallow async functions which have no await expression
        '@typescript-eslint/require-await': ['error'],
        'require-await': 'off',

        // ✨ 🔧 💭 enforces return await for consistent error handling (un-awaited promises will not be caught in async function try/catch)
        '@typescript-eslint/return-await': ['error'],
        'return-await': 'off',
    },
};

export default config;
