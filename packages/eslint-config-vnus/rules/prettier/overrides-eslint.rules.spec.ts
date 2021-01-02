import customConfig from './overrides-eslint.rules';

describe('Custom config: prettier/overrides-eslint.rules', () => {
    test('all rule names in "prettier/index" are present', () => {
        const originalConfig = jest.requireActual('eslint-config-prettier/index');
        expect(originalConfig).toHaveProperty(['rules']);

        const originalRuleNames = Object.keys(originalConfig.rules);
        originalRuleNames.forEach((ruleName) => {
            expect(customConfig.rules).toHaveProperty([ruleName]);
        });
    });
});
