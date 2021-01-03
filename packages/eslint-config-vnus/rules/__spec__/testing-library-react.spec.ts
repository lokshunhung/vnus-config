import customConfig from '../testing-library-react';

describe('Custom config: testing-library-react', () => {
    test('all rule names in plugin:testing-library/react are present', () => {
        const originalConfig = jest.requireActual('eslint-plugin-testing-library');
        expect(originalConfig).toHaveProperty(['configs', 'react', 'rules']);

        const originalRuleNames = Object.keys(originalConfig.configs.react.rules);
        expect(originalRuleNames).not.toHaveLength(0);
        originalRuleNames.forEach((ruleName) => {
            expect(customConfig.rules).toHaveProperty([ruleName]);
        });
    });
});
