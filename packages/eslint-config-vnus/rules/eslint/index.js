// @ts-check

const rulesPossibleProblems = require("./possible-problems");
const rulesSuggestions = require("./suggestions");
const rulesLayoutAndFormatting = require("./layout-and-formatting");

/** @type {import("eslint").Linter.Config} */
const configESLintRecommended = {
    parserOptions: {
        sourceType: "module",
        ecmaVersion: 2018,
    },
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
    },
    rules: {
        ...rulesPossibleProblems.rules,
        ...rulesSuggestions.rules,
        ...rulesLayoutAndFormatting.rules,
    },
};

module.exports = configESLintRecommended;
