import customConfig from '../eslint-recommended';

describe('Custom config: eslint-recommended', () => {
    test(`all rule names in "eslint:recommended" are present`, () => {
        const originalConfig = jest.requireActual('eslint/conf/eslint-recommended');
        expect(originalConfig).toHaveProperty(['rules']);

        const originalRuleNames = Object.keys(originalConfig.rules);
        expect(originalRuleNames).not.toHaveLength(0);
        originalRuleNames.forEach((ruleName) => {
            expect(customConfig.rules).toHaveProperty([ruleName]);
        });
    });
});
