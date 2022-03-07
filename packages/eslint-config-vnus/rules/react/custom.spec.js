const customConfig = require("./custom");

describe("Custom config: react/custom", () => {
    test("does not contain rule names from plugin:react/recommended", () => {
        const originalConfig = jest.requireActual("eslint-plugin-react");
        expect(originalConfig).toHaveProperty(["configs", "recommended", "rules"]);

        const originalRuleNames = Object.keys(originalConfig.configs.recommended.rules);
        expect(originalRuleNames).not.toHaveLength(0);
        originalRuleNames.forEach((ruleName) => {
            expect(customConfig.rules).not.toHaveProperty([ruleName]);
        });
    });
});
