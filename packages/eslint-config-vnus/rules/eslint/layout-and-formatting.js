// @ts-check

// ✅ Recommended
// 🔧 Fixable

// ✨ Customized
// 🛑 Disabled

/** @type {import("eslint").Linter.Config} */
const rulesLayoutAndFormatting = {
    rules: {
        // ✅ disallow mixed spaces and tabs for indentation
        "no-mixed-spaces-and-tabs": ["error"],

        // ✨ 🔧 require or disallow Unicode byte order mark (BOM)
        "unicode-bom": ["error"],

        // ✨ 🔧 require parentheses around immediate `function` invocations
        "wrap-iife": ["error", "inside"],
    },
};

module.exports = rulesLayoutAndFormatting;
