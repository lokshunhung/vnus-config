import customConfig from './recommended';

describe('Config: @typescript-eslint/recommended', () => {
    const originalConfig = jest.requireActual('@typescript-eslint/eslint-plugin');

    test('has rules', () => {
        expect(originalConfig).toHaveProperty(['configs', 'recommended', 'rules']);
        const originalRules = originalConfig.configs['recommended'].rules;
        expect(typeof originalRules).toBe('object');
    });

    test("rule settings for rules not from @typescript-eslint are 'off'", () => {
        const originalRules = originalConfig?.configs?.['recommended']?.rules;
        expect(originalRules).toBeDefined();

        Object.entries(originalRules)
            .filter(([ruleName]) => !ruleName.startsWith('@typescript-eslint'))
            .forEach((ruleEntry) => {
                const [ruleName] = ruleEntry;
                expect(ruleEntry).toStrictEqual([ruleName, 'off']);
            });
    });
});

describe('Custom config: typescript-eslint/recommended', () => {
    const originalConfig = jest.requireActual('@typescript-eslint/eslint-plugin');

    test('all rule names in plugin:@typescript-eslint/recommended are present', () => {
        const originalRules = originalConfig?.configs?.['recommended']?.rules;
        expect(originalRules).toBeDefined();

        const originalRuleNames = Object.keys(originalRules);
        expect(originalRuleNames.length).toBeGreaterThan(0);
        originalRuleNames.forEach((ruleName) => {
            expect(customConfig.rules).toHaveProperty([ruleName]);
        });
    });
});
