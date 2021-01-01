import customConfig from './typescript-eslint.rules';

describe('Custom config: typescript-eslint/typescript-eslint.rules', () => {
    test("rule setting uses either `'off'`, `['warn', ...]` or `['error', ...]`", () => {
        const customRuleEntries = Object.entries(customConfig.rules!);
        customRuleEntries.forEach((ruleEntry) => {
            const [ruleName, ruleSetting] = ruleEntry;
            if (typeof ruleSetting === 'string') {
                expect(ruleEntry).toStrictEqual([ruleName, 'off']);
            } else if (Array.isArray(ruleSetting) && ruleSetting[0] === 'warn') {
                expect([ruleName, ruleSetting.slice(0, 1)]).toStrictEqual([ruleName, ['warn']]);
            } else if (Array.isArray(ruleSetting) && ruleSetting[0] === 'error') {
                expect([ruleName, ruleSetting.slice(0, 1)]).toStrictEqual([ruleName, ['error']]);
            } else {
                expect(ruleEntry).toThrowError();
            }
        });
    });
});
