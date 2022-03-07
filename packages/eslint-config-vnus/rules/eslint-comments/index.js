// @ts-check

/** @type {import("eslint").Linter.Config} */
const configESLintComments = {
    plugins: ["eslint-comments"],
    rules: {
        "eslint-comments/disable-enable-pair": "off",
        "eslint-comments/no-aggregating-enable": "off",
        "eslint-comments/no-duplicate-disable": ["error"],
        "eslint-comments/no-unlimited-disable": ["error"],
        "eslint-comments/no-unused-enable": ["error"],

        //
        // Stylistic Issues
        //

        "eslint-comments/require-description": [
            "error",
            { ignore: ["eslint-enable", "eslint-env", "exported", "global", "globals"] },
        ],
    },
};

module.exports = configESLintComments;
