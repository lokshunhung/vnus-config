// @ts-check

// ✅ Recommended
// 🔧 Fixable
// 💭 Requires type information

// ✨ Customized
// 🛑 Disabled

/** @type {import("eslint").Linter.Config} */
const configTypeScriptESLintTypeChecking = {
    rules: {
        // ✅ 🔧 💭 disallows awaiting a value that is not a Thenable
        "@typescript-eslint/await-thenable": ["error"],

        // ✨ 🔧 💭 enforces consistent usage of type exports
        "@typescript-eslint/consistent-type-exports": ["error", { fixMixedExportsWithInlineTypeSpecifier: true }],

        // ✨ 🔧 💭 requires expressions of type void to appear in statement position
        "@typescript-eslint/no-confusing-void-expression": [
            "error",
            { ignoreArrowShorthand: true, ignoreVoidOperator: true },
        ],

        // ✅ 🔧 💭 requires Promise-like values to be handled appropriately
        "@typescript-eslint/no-floating-promises": ["error"],

        // ✅ 🔧 💭 disallows iterating over an array with a for-in loop
        "@typescript-eslint/no-for-in-array": ["error"],

        // ✅ 💭 avoid using promises in places not designed to handle them
        "@typescript-eslint/no-misused-promises": ["error"],

        // ✨ 🔧 💭 prevents conditionals where the type is always truthy or always falsy
        "@typescript-eslint/no-unnecessary-condition": ["error"],

        // ✨ 🔧 💭 enforces that type arguments will not be used if not required
        "@typescript-eslint/no-unnecessary-type-arguments": ["error"],
    },
};

module.exports = configTypeScriptESLintTypeChecking;
