import customConfig from '../jest-dom-recommended';

describe(`Custom config: jest-dom-recommended`, () => {
    test('all rule names in plugin:jest-dom/recommended are present', () => {
        const originalConfig = jest.requireActual('eslint-plugin-jest-dom');
        expect(originalConfig).toHaveProperty(['configs', 'recommended', 'rules']);

        const originalRuleNames = Object.keys(originalConfig.configs.recommended.rules);
        expect(originalRuleNames).not.toHaveLength(0);
        originalRuleNames.forEach((ruleName) => {
            expect(customConfig.rules).toHaveProperty([ruleName]);
        });
    });
});
