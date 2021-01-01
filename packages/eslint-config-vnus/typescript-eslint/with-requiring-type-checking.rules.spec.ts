import customConfig from './with-requiring-type-checking.rules';

describe('Config: @typescript-eslint/recommended-requiring-type-checking', () => {
    const originalConfig = jest.requireActual('@typescript-eslint/eslint-plugin');

    test('has rules', () => {
        expect(originalConfig).toHaveProperty(['configs', 'recommended-requiring-type-checking', 'rules']);
        const originalRules = originalConfig.configs['recommended-requiring-type-checking'].rules;
        expect(typeof originalRules).toBe('object');
    });

    test("rule settings for rules not from @typescript-eslint are 'off'", () => {
        const originalRules = originalConfig?.configs?.['recommended-requiring-type-checking']?.rules;
        expect(originalRules).toBeDefined();

        Object.entries(originalRules)
            .filter(([ruleName]) => !ruleName.startsWith('@typescript-eslint'))
            .forEach((ruleEntry) => {
                const [ruleName] = ruleEntry;
                expect(ruleEntry).toStrictEqual([ruleName, 'off']);
            });
    });
});

describe('Custom config: typescript-eslint/with-requiring-type-checking.rules', () => {
    const originalConfig = jest.requireActual('@typescript-eslint/eslint-plugin');

    test('all rule names in plugin:@typescript-eslint/recommended-requiring-type-checking are present', () => {
        const originalRules = originalConfig?.configs?.['recommended-requiring-type-checking']?.rules;
        expect(originalRules).toBeDefined();

        const originalRuleNames = Object.keys(originalRules);
        expect(originalRuleNames.length).toBeGreaterThan(0);
        originalRuleNames.forEach((ruleName) => {
            expect(customConfig.rules).toHaveProperty([ruleName]);
        });
    });

    test("rule setting uses either `'off'`, `['warn', ...]` or `['error', ...]`", () => {
        const customRuleEntries = Object.entries(customConfig.rules!);
        customRuleEntries.forEach((ruleEntry) => {
            const [ruleName, ruleSetting] = ruleEntry;
            if (typeof ruleSetting === 'string') {
                expect(ruleEntry).toStrictEqual([ruleName, 'off']);
            } else if (Array.isArray(ruleSetting) && ruleSetting[0] === 'warn') {
                expect([ruleName, ruleSetting.slice(0, 1)]).toStrictEqual([ruleName, ['warn']]);
            } else if (Array.isArray(ruleSetting) && ruleSetting[0] === 'error') {
                expect([ruleName, ruleSetting.slice(0, 1)]).toStrictEqual([ruleName, ['error']]);
            } else {
                expect(ruleEntry).toThrowError();
            }
        });
    });
});
