const customConfig = require("./index");

describe("Custom config: eslint-comments", () => {
    test(`all rule names in "plugin:eslint-comments/recommended" are present`, () => {
        const originalConfig = jest.requireActual("eslint-plugin-eslint-comments");
        expect(originalConfig).toHaveProperty(["configs", "recommended", "rules"]);

        const originalRuleNames = Object.keys(originalConfig.configs.recommended.rules);
        expect(originalRuleNames).not.toHaveLength(0);
        originalRuleNames.forEach((ruleName) => {
            expect(customConfig.rules).toHaveProperty([ruleName]);
        });
    });
});
