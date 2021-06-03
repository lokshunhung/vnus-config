import customConfig from "../prettier-react";

describe("Custom config: prettier-react", () => {
    test('all rule names in "prettier/react" are present', () => {
        const originalConfig = jest.requireActual("eslint-config-prettier/react");
        expect(originalConfig).toHaveProperty(["rules"]);

        const originalRuleNames = Object.keys(originalConfig.rules);
        originalRuleNames.forEach((ruleName) => {
            expect(customConfig.rules).toHaveProperty([ruleName]);
        });
    });
});
