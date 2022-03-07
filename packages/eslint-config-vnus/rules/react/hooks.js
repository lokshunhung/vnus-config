// @ts-check

/** @type {import("eslint").Linter.Config} */
const rulesHooks = {
    rules: {
        "react-hooks/exhaustive-deps": ["error"],
        "react-hooks/rules-of-hooks": ["error"],
    },
};

module.exports = rulesHooks;
