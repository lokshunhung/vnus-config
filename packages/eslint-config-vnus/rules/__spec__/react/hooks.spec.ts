import customConfig from "../../react/hooks";

describe("Custom config: react/hooks", () => {
    test("contains all rule names from plugin:react-hooks/recommended", () => {
        const originalConfig = jest.requireActual("eslint-plugin-react-hooks");
        expect(originalConfig).toHaveProperty(["configs", "recommended", "rules"]);

        const originalRuleNames = Object.keys(originalConfig.configs.recommended.rules);
        const customRuleNames = Object.keys(customConfig.rules!);
        customRuleNames.forEach((ruleName) => {
            expect(originalRuleNames).toContain(ruleName);
        });
    });
});
