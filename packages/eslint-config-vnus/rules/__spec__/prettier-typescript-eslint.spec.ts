import customConfig from "../prettier-typescript-eslint";

describe("Custom config: prettier-typescript-eslint", () => {
    test('all rule names in "prettier/@typescript-eslint" are present', () => {
        const originalConfig = jest.requireActual("eslint-config-prettier/@typescript-eslint");
        expect(originalConfig).toHaveProperty(["rules"]);

        const originalRuleNames = Object.keys(originalConfig.rules);
        originalRuleNames.forEach((ruleName) => {
            expect(customConfig.rules).toHaveProperty([ruleName]);
        });
    });
});
