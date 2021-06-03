import customConfig from "../../typescript-eslint/overrides-eslint-recommended";

describe(`Custom config: typescript-eslint/overrides-eslint-recommended`, () => {
    test("has rules", () => {
        expect(Object.entries(customConfig.rules!)).not.toHaveLength(0);
    });
});
