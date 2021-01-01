import customConfig from './overrides-eslint-recommended';

describe('Config: @typescript-eslint/eslint-recommended', () => {
    const originalConfig = jest.requireActual('@typescript-eslint/eslint-plugin/dist/configs/eslint-recommended');

    test('has rules', () => {
        expect(originalConfig).toHaveProperty(['overrides', '0', 'rules']);
        const originalRules = originalConfig.overrides[0].rules;
        expect(typeof originalRules).toBe('object');
    });

    test('only contains rules from "eslint"', () => {
        const originalRules = originalConfig?.overrides?.[0]?.rules;
        expect(originalRules).toBeDefined();

        Object.keys(originalRules).forEach((ruleName) => {
            expect(ruleName).toMatch(/^[a-z]+(-[a-z]+)*$/);
        });
    });
});

describe(`Custom config: typescript-eslint/overrides-eslint-recommended`, () => {
    const originalConfig = jest.requireActual('@typescript-eslint/eslint-plugin/dist/configs/eslint-recommended');

    test('all rules and settings in "plugin:@typescript-eslint/eslint-recommended" are present', () => {
        const originalRules = originalConfig?.overrides?.[0]?.rules;
        expect(originalRules).toBeDefined();

        const originalRuleNames = Object.keys(originalRules);
        originalRuleNames.forEach((ruleName) => {
            expect(customConfig.rules).toHaveProperty([ruleName]);
        });

        const normalizedCustomRules: Record<string, string> = {};
        Object.entries(customConfig.rules!).forEach(([ruleName, ruleSetting]) => {
            if (Array.isArray(ruleSetting)) {
                normalizedCustomRules[ruleName] = ruleSetting[0] as string;
            } else {
                normalizedCustomRules[ruleName] = ruleSetting as string;
            }
        });
        expect(normalizedCustomRules).toStrictEqual(originalRules);
    });
});
