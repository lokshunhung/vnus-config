const customConfig = require("./hooks");

describe("Custom config: react/hooks", () => {
    test("contains all rule names from plugin:react-hooks/recommended", () => {
        const originalConfig = jest.requireActual("eslint-plugin-react-hooks");
        expect(originalConfig).toHaveProperty(["configs", "recommended", "rules"]);

        const originalRuleNames = Object.keys(originalConfig.configs.recommended.rules);
        expect(originalRuleNames).not.toHaveLength(0);
        originalRuleNames.forEach((ruleName) => {
            expect(customConfig.rules).toHaveProperty([ruleName]);
        });
    });
});
