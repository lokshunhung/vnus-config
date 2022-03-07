// @ts-check

// ✅ Recommended
// 🔧 Fixable

// ✨ Customized
// 🛑 Disabled

/** @type {import("eslint").Linter.Config} */
const configJest = {
    plugins: ["jest"],
    rules: {
        // ✨ 🔧 prefer `test` over `it`
        "jest/consistent-test-it": ["warn", { fn: "test", withinDescribe: "test" }],

        // 🛑 ✅ too annoying; no need to expect `expect` assertion
        "jest/expect-expect": "off",

        // ✨ 🔧 disallow alias methods
        "jest/no-alias-methods": ["warn"],

        // ✅ disallow commented out tests
        "jest/no-commented-out-tests": ["warn"],

        // 🛑 ✅ too restrictive; allow calling `expect` conditionally
        "jest/no-conditional-expect": "off",

        // ✅ 🔧 disallow use of deprecated functions
        "jest/no-deprecated-functions": ["warn"],

        // 🛑 ✅ too annoying; allow disabled tests
        "jest/no-disabled-tests": "off",

        // 🛑 ✅ too annoying; allow using callbacks in asynchronous tests and hooks
        "jest/no-done-callback": "off",

        // ✨ disallow duplicate setup and teardown hooks
        "jest/no-duplicate-hooks": ["warn"],

        // ✅ disallow using `exports` in files containing tests
        "jest/no-export": ["warn"],

        // 🛑 ✅ 🔧 too annoying; allow focused tests
        "jest/no-focused-tests": "off",

        // ✅ disallow identical titles
        "jest/no-identical-title": ["warn"],

        // ✅ disallow string interpolation inside snapshots
        "jest/no-interpolation-in-snapshots": ["warn"],

        // ✅ 🔧 disallow jasmine globals
        "jest/no-jasmine-globals": ["warn"],

        // ✅ disallow importing jest
        "jest/no-jest-import": ["warn"],

        // ✅ disallow manually importing from `__mocks__`
        "jest/no-mocks-import": ["warn"],

        // 🛑 ✨ disallow specific mathcers & modifiers
        "jest/no-restricted-matchers": "off",

        // ✅ disallow using `expect` outside of `it` or `test` blocks
        "jest/no-standalone-expect": ["warn"],

        // ✅ 🔧 use `.only` and `.skip` over `f` and `x`
        "jest/no-test-prefixes": ["warn"],

        // ✨ disallow explicitly returning from tests
        "jest/no-test-return-statement": ["warn"],

        // ✨ suggest using `toBeCalledWith()` or `toHaveBeenCalledWith()`
        "jest/prefer-called-with": ["warn"],

        // ✨ 🔧 suggest using the built-in comparison matchers
        "jest/prefer-comparison-matcher": ["warn"],

        // ✨ 🔧 suggest using the built-in equality matchers
        "jest/prefer-equality-matcher": ["warn"],

        // 🛑 ✨ 🔧 suggest using `expect.assertions()` OR `expect.hasAssertions()`
        "jest/prefer-expect-assertions": "off",

        // ✨ 🔧 prefer await expect(...).resolves over expect(await ...) syntax
        "jest/prefer-expect-resolves": ["warn"],

        // ✨ suggest having hooks before any test cases
        "jest/prefer-hooks-on-top": ["warn"],

        // ✨ 🔧 enforce lowercase test names
        "jest/lowercase-name": ["warn", { ignore: ["describe"] }],

        // ✨ prefer including a hint with external snapshots
        "jest/prefer-snapshot-hint": ["warn"],

        // ✨ 🔧 suggest using `jest.spyOn()`
        "jest/prefer-spy-on": ["warn"],

        // ✨ 🔧 suggest using `toStrictEqual()`
        "jest/prefer-strict-equal": ["warn"],

        // ✨ 🔧 suggest using toBe() for primitive literals
        "jest/prefer-to-be": ["warn"],

        // ✨ 🔧 suggest using `toContain()`
        "jest/prefer-to-contain": ["warn"],

        // ✨ 🔧 suggest using `toHaveLength()`
        "jest/prefer-to-have-length": ["warn"],

        // ✨ 🔧 suggest using `test.todo`
        "jest/prefer-todo": ["warn"],

        // ✨ require test cases and hooks to be inside a `describe` block
        "jest/require-top-level-describe": ["warn"],

        // ✅ too annoying; no need to enforce valid `describe()` callback
        "jest/valid-describe-callback": ["warn"],

        // ✅ enforce valid `expect()` usage
        "jest/valid-expect": ["warn"],

        // ✅ enforce having return statement when testing with promises
        "jest/valid-expect-in-promise": ["warn"],

        // 🛑 ✅ 🔧 enforce valid titles
        "jest/valid-title": "off",

        // ✨ enforces unbound methods are called with their expected scope
        "jest/unbound-method": ["warn"],

        //
        // Overrides
        //

        "no-shadow": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-shadow": "off",
        "@typescript-eslint/unbound-method": "off",
    },
};

module.exports = configJest;
