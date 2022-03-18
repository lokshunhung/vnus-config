const customConfig = require("./index");

const excludedRules = { "no-var": 1, "prefer-const": 1, "prefer-rest-params": 1, "prefer-spread": 1 };

describe("Custom config: typescript-eslint-recommended", () => {
    describe(`except ${JSON.stringify(excludedRules)}`, () => {
        test("rule settings for rules not from @typescript-eslint are 'off'", () => {
            const customRules = /** @type {*} */ (customConfig.rules);
            expect(customRules).toBeDefined();

            Object.entries(customRules)
                .filter(([ruleName]) => !ruleName.startsWith("@typescript-eslint"))
                .filter(([ruleName]) => !(ruleName in excludedRules))
                .forEach((ruleEntry) => {
                    const [ruleName] = ruleEntry;
                    expect(ruleEntry).toStrictEqual([ruleName, "off"]);
                });
        });
    });
});
