// @ts-check

// @ts-ignore -- no typedef
const confusingBrowserGlobals = require("confusing-browser-globals");

// ✅ Recommended
// 🔧 Fixable

// ✨ Customized
// 🛑 Disabled

/** @type {import("eslint").Linter.Config} */
const rulesSuggestions = {
    rules: {
        // ✨ enforce default clauses in switch statements to be last
        "default-case-last": ["error"],

        // ✨ 🔧 require the use of `===` and `!==`; only allow `variable == null` (checks `null`, `undefined`)
        eqeqeq: ["error", "always", { null: "ignore" }],

        // ✨ disallow the use of `alert`, `confirm`, and `prompt`
        "no-alert": ["warn"],

        // ✨ disallow `Array` constructors
        "no-array-constructor": ["error"],

        // ✅ disallow lexical declarations in case clauses
        "no-case-declarations": ["error"],

        // ✨ warns about the use of `console`; allow `console.info`, `console.warn`, `console.error`, `console.time`, `console.timeLog`, `console.timeEnd`
        "no-console": ["warn", { allow: ["info", "warn", "error", "time", "timeLog", "timeEnd"] }],

        // ✅ disallow deleting variables
        "no-delete-var": ["error"],

        // ✅ disallow empty block statements
        "no-empty": ["error"],

        // ✨ disallow the use of `eval()`
        "no-eval": ["error", { allowIndirect: true }],

        // ✨ 🔧 disallow unnecessary calls to `.bind()`
        "no-extra-bind": ["error"],

        // ✅ 🔧 disallow unnecessary boolean casts
        "no-extra-boolean-cast": ["error"],

        // ✅ 🔧 disallow unnecessary semicolons
        "no-extra-semi": ["error"],

        // ✅ disallow assignments to native objects or read-only global variables
        "no-global-assign": ["error"],

        // ✨ 🔧 disallow shorthand type conversions
        "no-implicit-coercion": ["error", { boolean: false, number: true, string: true, allow: [] }],

        // ✨ disallow the use of `eval()`-like methods
        "no-implied-eval": ["error"],

        // ✨ disallow the use of the `__iterator__` property
        "no-iterator": ["error"],

        // ✨ disallow `Object` constructors
        "no-new-object": ["error"],

        // ✅ disallow `new` operators with the `String`, `Number`, and `Boolean` objects
        "no-new-wrappers": ["error"],

        // ✅ 🔧 disallow `\8` and `\9` escape sequences in string literals
        "no-nonoctal-decimal-escape": ["error"],

        // ✅ disallow octal literals
        "no-octal": ["error"],

        // ✨ disallow octal escape sequences in string literals
        "no-octal-escape": ["error"],

        // ✨ disallow the use of the `__proto__` property; see: https://exploringjs.com/es6/ch_oop-besides-classes.html#_the-two-kinds-of-proto-in-ecmascript-6
        "no-proto": ["error"],

        // ✅ disallow variable redeclaration
        "no-redeclare": ["error"],

        // ✅ 🔧 disallow multiple spaces in regular expressions
        "no-regex-spaces": ["error"],

        // disallow certain properties on certain objects
        "no-restricted-properties": [
            "error",
            {
                object: "require",
                property: "ensure",
                message: "Please use import() instead.",
            },
        ],

        // ✨ disallow specified global variables
        "no-restricted-globals": [
            "error",
            {
                name: "isFinite",
                message: "Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite",
            },
            {
                name: "isNaN",
                message: "Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan",
            },
            ...confusingBrowserGlobals,
        ],

        // ✨ disallow certain syntax forms (adapted from airbnb style guide)
        "no-restricted-syntax": [
            "error",
            {
                selector: "ForInStatement",
                message:
                    "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
            },
            // TODO: covered by "no-with"?
            {
                selector: "WithStatement",
                message:
                    "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
            },
        ],

        // ✅ disallow identifiers from shadowing restricted names
        "no-shadow-restricted-names": ["error"],

        // ✨ disallow throwing literals as exceptions
        "no-throw-literal": ["error"],

        // ✨ 🔧 disallow Initializing to undefined
        "no-undef-init": ["error"],

        // ✨ ✅ 🔧 warn on unused labels
        "no-unused-labels": ["warn"],

        // ✅ disallow unnecessary `catch` clauses
        "no-useless-catch": ["error"],

        // ✨ 🔧 disallow unnecessary computed property keys in objects and classes
        "no-useless-computed-key": ["error"],

        // ✨ disallow unnecessary constructors
        "no-useless-constructor": ["error"],

        // ✅ disallow unnecessary escape characters
        "no-useless-escape": ["error"],

        // ✨ 🔧 disallow unnecessary computed property keys in objects and classes
        "no-useless-rename": ["error"],

        // ✨ 🔧 require `let` or `const` instead of `var`
        "no-var": ["error"],

        // ✅ disallow `with` statements
        "no-with": ["error"],

        // ✨ 🔧 require or disallow method and property shorthand syntax for object literals
        "object-shorthand": ["error"],

        // TODO: "one-var"

        // ✨ 🔧 require `const` declarations for variables that are never reassigned after declared
        "prefer-const": ["error"],

        // ✨ 🔧 disallow the use of `Math.pow` in favor of the `**` operator
        "prefer-exponentiation-operator": ["error"],

        // TODO: "prefer-object-has-own" warn

        // ✨ 🔧 disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead
        "prefer-object-spread": ["error"],

        // TODO: "prefer-promise-reject-errors"

        // ✨ 🔧 disallow use of the `RegExp` constructor in favor of regular expression literals
        "prefer-regex-literals": ["error", { disallowRedundantWrapping: true }],

        // ✨ require spread operators instead of `.apply()`
        "prefer-spread": ["error"],

        // ✨ enforce the consistent use of the radix argument when using `parseInt()`
        radix: ["error"],

        // ✅ require generator functions to contain `yield`
        "require-yield": ["error"],

        // 🛑 ✨ 🔧 too annoying; do not warn about sorted import declarations within modules
        "sort-imports": "off",

        // ✨ 🔧 enforce consistent spacing after the `//` or `/*` in a comment
        "spaced-comment": ["error", "always", { exceptions: ["-"], markers: ["/"] }],

        // ✨ require symbol descriptions
        "symbol-description": ["error"],

        // ✨ 🔧 disallow "Yoda" conditions, except range like `0 < x && x <= 10`
        yoda: ["error", "never", { exceptRange: true }],
    },
};

module.exports = rulesSuggestions;
