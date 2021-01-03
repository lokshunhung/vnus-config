import customConfig from '../../react/custom';

describe('Custom config: react/custom', () => {
    test('does not contain rule names from plugin:react/recommended', () => {
        const originalConfig = jest.requireActual('eslint-plugin-react');
        expect(originalConfig).toHaveProperty(['configs', 'recommended', 'rules']);

        const originalRuleNames = Object.keys(originalConfig.configs.recommended.rules);
        const customRuleNames = Object.keys(customConfig.rules!);
        customRuleNames.forEach((ruleName) => {
            expect(originalRuleNames).not.toContain(ruleName);
        });
    });
});
