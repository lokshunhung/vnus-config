import customConfig from './typescript-eslint.rules';

const excluded = ['no-var', 'prefer-const', 'prefer-rest-params', 'prefer-spread'];

describe('Custom config: typescript-eslint/typescript-eslint.rules', () => {
    describe(`except ${JSON.stringify(excluded)}`, () => {
        test("rule settings for rules not from @typescript-eslint are 'off'", () => {
            const customRules = customConfig.rules;
            expect(customRules).toBeDefined();

            Object.entries(customRules!)
                .filter(([ruleName]) => !ruleName.startsWith('@typescript-eslint'))
                .filter(([ruleName]) => !excluded.includes(ruleName))
                .forEach((ruleEntry) => {
                    const [ruleName] = ruleEntry;
                    expect(ruleEntry).toStrictEqual([ruleName, 'off']);
                });
        });
    });
});
