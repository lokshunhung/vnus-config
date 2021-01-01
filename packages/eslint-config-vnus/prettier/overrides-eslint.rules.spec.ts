import customConfig from './overrides-eslint.rules';

describe('Config: eslint-config-prettier/index', () => {
    const originalConfig = jest.requireActual('eslint-config-prettier/index');

    test('has rules', () => {
        expect(Object.keys(originalConfig).length).toBe(1);
        expect(originalConfig).toHaveProperty(['rules']);
        expect(typeof originalConfig.rules).toBe('object');
    });

    test('only contains rules from "eslint"', () => {
        const presetRules = originalConfig?.rules;
        expect(presetRules).toBeDefined();

        Object.entries(presetRules).forEach((ruleEntry) => {
            const [ruleName] = ruleEntry;
            expect(ruleName).toMatch(/^[a-z]+(-[a-z]+)*$/);
        });
    });

    test('preset only turn off lint rules', () => {
        const originalRules = originalConfig?.rules;
        expect(originalRules).toBeDefined();

        Object.entries(originalRules).forEach((ruleEntry) => {
            const [_, ruleSetting] = ruleEntry;
            if (typeof ruleSetting === 'number') {
                expect(ruleSetting).toBe(0);
            } else if (typeof ruleSetting === 'string') {
                expect(ruleSetting).toBe('off');
            } else {
                expect(ruleEntry).toThrowError();
            }
        });
    });
});

describe('Custom config: prettier/overrides-eslint.rules', () => {
    const originalConfig = jest.requireActual('eslint-config-prettier/index');

    test('all rule names in "prettier/index" are present', () => {
        const originalRules = originalConfig?.rules;
        expect(originalRules).toBeDefined();

        const originalRuleNames = Object.keys(originalRules);
        originalRuleNames.forEach((ruleName) => {
            expect(customConfig.rules).toHaveProperty([ruleName]);
        });
    });

    test("rule setting uses either `'off`, `['warn', ...]` or `['error', ...]`", () => {
        const customRuleEntires = Object.entries(customConfig.rules!);
        customRuleEntires.forEach((ruleEntry) => {
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
