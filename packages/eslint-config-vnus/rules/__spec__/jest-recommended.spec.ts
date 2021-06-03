import customConfig from "../jest-recommended";

const deprecatedRules = ["jest/no-try-expect"];

describe("Custom config: jest-recommended", () => {
    test(`all rule names in "plugin:jest/recommended" are present`, () => {
        const originalConfig = jest.requireActual("eslint-plugin-jest");
        expect(originalConfig).toHaveProperty(["configs", "recommended"]);

        const originalRuleNames = Object.keys(originalConfig.configs.recommended.rules);
        originalRuleNames
            .filter((ruleName) => !deprecatedRules.includes(ruleName))
            .forEach((ruleName) => {
                expect(customConfig.rules).toHaveProperty([ruleName]);
            });
    });
});
