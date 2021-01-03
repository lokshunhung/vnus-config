import customConfig from '../../typescript-eslint/recommended';

describe('Custom config: typescript-eslint/recommended', () => {
    test('all rule names in plugin:@typescript-eslint/recommended are present', () => {
        const originalConfig = jest.requireActual('@typescript-eslint/eslint-plugin');
        expect(originalConfig).toHaveProperty(['configs', 'recommended', 'rules']);

        const originalRuleNames = Object.keys(originalConfig.configs.recommended.rules);
        expect(originalRuleNames).not.toHaveLength(0);
        originalRuleNames.forEach((ruleName) => {
            expect(customConfig.rules).toHaveProperty([ruleName]);
        });
    });
});
