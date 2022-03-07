const customConfig = require("./recommended");

describe("Custom config: react/recommended", () => {
    test("all rule names in plugin:react/recommended are present", () => {
        const originalConfig = jest.requireActual("eslint-plugin-react");
        expect(originalConfig).toHaveProperty(["configs", "recommended", "rules"]);

        const originalRuleNames = Object.keys(originalConfig.configs.recommended.rules);
        expect(originalRuleNames).not.toHaveLength(0);
        originalRuleNames.forEach((ruleName) => {
            expect(customConfig.rules).toHaveProperty([ruleName]);
        });
    });

    test("does not contain rule names not from plugin:react/recommended", () => {
        const originalConfig = jest.requireActual("eslint-plugin-react");
        expect(originalConfig).toHaveProperty(["configs", "recommended", "rules"]);

        const customRuleNames = Object.keys(/** @type {*} */ (customConfig.rules));
        expect(customRuleNames).not.toHaveLength(0);
        customRuleNames.forEach((ruleName) => {
            expect(originalConfig.configs.recommended.rules).toHaveProperty([ruleName]);
        });
    });
});
