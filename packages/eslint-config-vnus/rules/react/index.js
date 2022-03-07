// @ts-check

const rulesRecommended = require("./recommended");
const rulesCustom = require("./custom");
const rulesHooks = require("./hooks");

/** @type {import("eslint").Linter.Config} */
const configReact = {
    plugins: ["react", "react-hooks"],
    parserOptions: {
        ecmaFeatures: { jsx: true },
    },
    settings: {
        react: { version: "detect" },
    },
    rules: {
        ...rulesRecommended.rules,
        ...rulesCustom.rules,
        ...rulesHooks.rules,
    },
};

module.exports = configReact;
