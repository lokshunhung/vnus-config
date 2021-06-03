import type { Linter } from "eslint";

// ✅ Recommended
// 🔧 Fixable

// ✨ Customized
// 🛑 Disabled

const rulesPossibleErrors: Linter.Config = {
    rules: {
        // ✅ enforce "for" loop update clause moving the counter in the right direction.
        "for-direction": ["error"],

        // ✅ enforce `return` statements in getters
        "getter-return": ["error", { allowImplicit: true }],

        // ✅ disallow using an async function as a Promise executor
        "no-async-promise-executor": ["error"],

        // ✨ disallow `await` inside of loops
        "no-await-in-loop": ["error"],

        // ✅ disallow comparing against -0
        "no-compare-neg-zero": ["error"],

        // ✨ ✅ disallow assignment operators in conditional expressions
        "no-cond-assign": ["error", "always"],

        // ✨ warns about the use of `console`; allow `console.info`, `console.warn`, `console.error`, `console.time`, `console.timeLog`, `console.timeEnd`
        "no-console": ["warn", { allow: ["info", "warn", "error", "time", "timeLog", "timeEnd"] }],

        // ✅ disallow constant expressions in conditions
        "no-constant-condition": ["error"],

        // ✅ disallow control characters in regular expressions
        "no-control-regex": ["error"],

        // ✨ ✅ warns about the use of `debugger`
        "no-debugger": ["warn"],

        // ✅ disallow duplicate arguments in `function` definitions
        "no-dupe-args": ["error"],

        // ✅ disallow duplicate conditions in if-else-if chains
        "no-dupe-else-if": ["error"],

        // ✅ disallow duplicate keys in object literals
        "no-dupe-keys": ["error"],

        // ✅ disallow duplicate case labels
        "no-duplicate-case": ["error"],

        // ✅ disallow empty block statements
        "no-empty": ["error"],

        // ✅ disallow empty character classes in regular expressions
        "no-empty-character-class": ["error"],

        // ✅ disallow reassigning exceptions in `catch` clauses
        "no-ex-assign": ["error"],

        // ✅ 🔧 disallow unnecessary boolean casts
        "no-extra-boolean-cast": ["error"],

        // ✅ 🔧 disallow unnecessary semicolons
        "no-extra-semi": ["error"],

        // ✅ disallow reassigning `function` declarations
        "no-func-assign": ["error"],

        // ✅ disallow assigning to imported bindings
        "no-import-assign": ["error"],

        // ✅ disallow variable or `function` declarations in nested blocks
        "no-inner-declarations": ["error"],

        // ✅ disallow invalid regular expression strings in `RegExp` constructors
        "no-invalid-regexp": ["error"],

        // ✅ disallow irregular whitespace
        "no-irregular-whitespace": ["error"],

        // ✨ disallow literal numbers that lose precision
        "no-loss-of-precision": ["error"],

        // ✅ disallow characters which are made with multiple code points in character class syntax
        "no-misleading-character-class": ["error"],

        // ✅ disallow calling global object properties as functions
        "no-obj-calls": ["error"],

        // ✅ disallow calling some `Object.prototype` methods directly on objects
        "no-prototype-builtins": ["error"],

        // ✅ 🔧 disallow multiple spaces in regular expressions
        "no-regex-spaces": ["error"],

        // ✅ disallow returning values from setters
        "no-setter-return": ["error"],

        // ✅ disallow sparse arrays
        "no-sparse-arrays": ["error"],

        // ✅ disallow confusing multiline expressions
        "no-unexpected-multiline": ["error"],

        // ✅ disallow unreachable code after `return`, `throw`, `continue`, and `break` statements
        "no-unreachable": ["error"],

        // ✅ disallow control flow statements in `finally` blocks
        "no-unsafe-finally": ["error"],

        // ✅ disallow negating the left operand of relational operators
        "no-unsafe-negation": ["error"],

        // ✨ disallow use of optional chaining in contexts where the `undefined` value is not allowed
        "no-unsafe-optional-chaining": ["error", { disallowArithmeticOperators: true }],

        // ✅ require calls to `isNaN()` when checking for `NaN`
        "use-isnan": ["error"],

        // ✅ enforce comparing `typeof` expressions against valid strings
        "valid-typeof": ["error", { requireStringLiterals: true }],
    },
};

export default rulesPossibleErrors;
