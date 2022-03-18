const customConfig = require("./overrides-eslint");

describe(`Custom config: typescript-eslint/overrides-eslint-recommended`, () => {
    test("has rules", () => {
        const customRules = /** @type {*} */ (customConfig.rules);
        expect(Object.entries(customRules)).not.toHaveLength(0);
    });
});
