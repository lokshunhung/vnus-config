// @ts-check

// 🔧 Fixable
// 🛑 Disabled

/** @type {import("eslint").Linter.Config} */
const rulesCustom = {
    rules: {
        // forbid "button" element without an explicit "type" attribute
        "react/button-has-type": ["error"],

        // 🔧 enforce a specific function type for function components
        "react/function-component-definition": [
            "error",
            { namedComponents: "arrow-function", unnamedComponents: "arrow-function" },
        ],

        // reports when this.state is accessed within setState
        "react/no-access-state-in-setstate": ["error"],

        // prevent usage of Array index in keys
        "react/no-array-index-key": ["error"],

        // 🔧 lifecycle methods should be methods on the prototype, not class fields
        "react/no-arrow-function-lifecycle": ["error"],

        // 🔧 prevent usage of invalid attributes
        "react/no-invalid-html-attribute": ["error"],

        // ensure no casing typos were made declaring static class properties and lifecycle methods
        "react/no-typos": ["error"],

        // prevent creating unstable components inside components
        "react/no-unstable-nested-components": ["error", { allowAsProps: true }],

        // 🔧 prevent extra closing tags for components without children
        "react/self-closing-comp": ["error"],

        // enforce state initialization style in constructor
        "react/state-in-constructor": ["error", "always"],

        //
        // JSX-specific rules
        //

        // 🔧 enforce no attributes should specify value of `true`
        "react/jsx-boolean-value": ["error", "never"],

        // 🔧 disallow unnecessary JSX expressions when literals alone are sufficient in attributes
        "react/jsx-curly-brace-presence": [
            "error",
            { props: "never", children: "ignore", propElementValues: "always" },
        ],

        // 🔧 enforce shorthand form for React fragments
        "react/jsx-fragments": ["error", "syntax"],

        // no .bind() or Arrow Functions in Props
        "react/jsx-no-bind": [
            "error",
            {
                ignoreDOMComponents: false,
                ignoreRefs: false,
                allowArrowFunctions: true,
                allowFunctions: false,
                allowBind: false,
            },
        ],

        // prevents JSX context provider values from taking values that will cause needless rerenders
        "react/jsx-no-constructed-context-values": ["error"],

        // prevent usage of `javascript:` URLs
        "react/jsx-no-script-url": ["error"],

        // disallow unnecessary fragments
        "react/jsx-no-useless-fragment": ["error"],

        // 🛑 use typescript; allow JSX props spreading
        "react/jsx-props-no-spreading": "off",
    },
};

module.exports = rulesCustom;
