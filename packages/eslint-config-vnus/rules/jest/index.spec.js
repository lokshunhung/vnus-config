const customConfig = require("./index");

describe("Custom config: jest-recommended", () => {
    test(`all rule names in "plugin:jest/recommended" are present`, () => {
        const originalConfig = jest.requireActual("eslint-plugin-jest");
        expect(originalConfig).toHaveProperty(["configs", "recommended"]);

        const originalRuleNames = Object.keys(originalConfig.configs.recommended.rules);
        expect(originalRuleNames).not.toHaveLength(0);
        originalRuleNames.forEach((ruleName) => {
            expect(customConfig.rules).toHaveProperty([ruleName]);
        });
    });
});
