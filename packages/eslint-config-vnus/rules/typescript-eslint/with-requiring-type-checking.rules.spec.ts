import customConfig from './with-requiring-type-checking.rules';

describe('Custom config: typescript-eslint/with-requiring-type-checking.rules', () => {
    test('all rule names in plugin:@typescript-eslint/recommended-requiring-type-checking are present', () => {
        const originalConfig = jest.requireActual('@typescript-eslint/eslint-plugin');
        expect(originalConfig).toHaveProperty(['configs', 'recommended-requiring-type-checking', 'rules']);

        const originalRuleNames = Object.keys(originalConfig.configs['recommended-requiring-type-checking'].rules);
        expect(originalRuleNames).not.toHaveLength(0);
        originalRuleNames.forEach((ruleName) => {
            expect(customConfig.rules).toHaveProperty([ruleName]);
        });
    });
});
