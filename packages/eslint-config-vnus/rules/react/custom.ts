import type { Linter } from "eslint";

// 🔧 Fixable
// 🛑 Disabled

const rulesCustom: Linter.Config = {
    rules: {
        // forbid "button" element without an explicit "type" attribute
        "react/button-has-type": ["error"],

        // enforce a specific function type for function components
        "react/function-component-definition": [
            "error",
            { namedComponents: "arrow-function", unnamedComponents: "arrow-function" },
        ],

        // prevent usage of Array index in keys
        "react/no-array-index-key": ["error"],

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
        "react/jsx-curly-brace-presence": ["error", { props: "never", children: "ignore" }],

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

        // prevent usage of `javascript:` URLs
        "react/jsx-no-script-url": ["error"],

        // disallow unnecessary fragments
        "react/jsx-no-useless-fragment": ["error"],

        // 🛑 use typescript; allow JSX props spreading
        "react/jsx-props-no-spreading": "off",
    },
};

export default rulesCustom;
