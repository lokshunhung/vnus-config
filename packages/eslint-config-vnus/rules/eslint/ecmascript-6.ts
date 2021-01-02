import type { Linter } from 'eslint';

// ✅ Recommended
// 🔧 Fixable

// ✨ Customized
// 🛑 Disabled

const rulesECMAScript6: Linter.Config = {
    rules: {
        // ✅ require `super()` calls in constructors
        'constructor-super': ['error'],

        // ✅ disallow reassigning class members
        'no-class-assign': ['error'],

        // ✅ disallow reassigning `const` variables
        'no-const-assign': ['error'],

        // ✅ disallow duplicate class members
        'no-dupe-class-members': ['error'],

        // 🛑 use "import/no-duplicates"
        'no-duplicate-imports': 'off',

        // ✅ disallow `new` operators with the `Symbol` object
        'no-new-symbol': ['error'],

        // ✅ disallow `this`/`super` before calling `super()` in constructors
        'no-this-before-super': ['error'],

        // ✨ 🔧 disallow unnecessary computed property keys in objects and classes
        'no-useless-computed-key': ['error'],

        // ✨ disallow unnecessary constructors
        'no-useless-constructor': ['error'],

        // ✨ 🔧 disallow unnecessary computed property keys in objects and classes
        'no-useless-rename': ['error'],

        // ✨ 🔧 require `let` or `const` instead of `var`
        'no-var': ['error'],

        // ✨ 🔧 require or disallow method and property shorthand syntax for object literals
        'object-shorthand': ['error'],

        // ✨ 🔧 require `const` declarations for variables that are never reassigned after declared
        'prefer-const': ['error'],

        // ✨ require spread operators instead of `.apply()`
        'prefer-spread': ['error'],

        // ✅ require generator functions to contain `yield`
        'require-yield': ['error'],

        // 🛑 ✨ 🔧 too annoying; do not warn about sorted import declarations within modules
        'sort-imports': 'off',

        // ✨ require symbol descriptions
        'symbol-description': ['error'],
    },
};

export default rulesECMAScript6;
