// @ts-check

const pluginTypeScriptESLint = require("@typescript-eslint/eslint-plugin/dist/configs/eslint-recommended");

// ✅ Recommended
// 🔧 Fixable
// 💭 Requires type information

// ✨ Customized
// 🛑 Disabled

/** @type {import("eslint").Linter.Config} */
const rulesOverridesESLint = {
    rules: {
        ...pluginTypeScriptESLint.overrides[0].rules,
    },
};

module.exports = rulesOverridesESLint;
