import customConfig from './eslint-comments.rules';

describe('Custom config: eslint-comments/eslint-comments.rules', () => {
    test(`all rule names in "plugin:eslint-comments/recommended" are present`, () => {
        const originalConfig = jest.requireActual('eslint-plugin-eslint-comments');
        expect(originalConfig).toHaveProperty(['configs', 'recommended', 'rules']);

        const originalRuleNames = Object.keys(originalConfig.configs.recommended.rules);
        originalRuleNames.forEach((ruleName) => {
            expect(customConfig.rules).toHaveProperty([ruleName]);
        });
    });
});
