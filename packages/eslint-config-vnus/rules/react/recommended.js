// @ts-check

// 🔧 Fixable
// 🛑 Disabled

/** @type {import("eslint").Linter.Config} */
const rulesRecommended = {
    rules: {
        // 🛑 not useful
        "react/display-name": "off",

        // report missing key props in iterators/collection literals
        "react/jsx-key": ["error"],

        // comments inside children section of tag should be placed inside braces
        "react/jsx-no-comment-textnodes": ["error"],

        // enforce no duplicate props
        "react/jsx-no-duplicate-props": ["error"],

        // forbid target="_blank" attribute without rel="noreferrer"
        "react/jsx-no-target-blank": ["error"],

        // disallow undeclared variables in JSX
        "react/jsx-no-undef": ["error"],

        // prevent React to be marked as unused
        "react/jsx-uses-react": ["error"],

        // prevent variables used in JSX to be marked as unused
        "react/jsx-uses-vars": ["error"],

        // prevent passing of children as props
        "react/no-children-prop": ["error"],

        // report when a DOM element is using both children and dangerouslySetInnerHTML
        "react/no-danger-with-children": ["error"],

        // prevent usage of deprecated methods
        "react/no-deprecated": ["error"],

        // prevent direct mutation of this.state
        "react/no-direct-mutation-state": ["error"],

        // prevent usage of findDOMNode
        "react/no-find-dom-node": ["error"],

        // prevent usage of isMounted
        "react/no-is-mounted": ["error"],

        // prevent usage of the return value of ReactDOM.render
        "react/no-render-return-value": ["error"],

        // prevent string definitions for references and prevent referencing this.refs
        "react/no-string-refs": ["error"],

        // detect unescaped HTML entities, which might represent malformed tags
        "react/no-unescaped-entities": ["error"],

        // 🔧 prevent usage of unknown DOM property
        "react/no-unknown-property": ["error"],

        // 🛑 too strict
        "react/no-unsafe": "off",

        // 🛑 use typescript or jsdoc for type checking
        "react/prop-types": ["error"],

        // 🛑 use new jsx transform
        "react/react-in-jsx-scope": "off",

        // 🛑 not useful
        "react/require-render-return": ["error"],
    },
};

module.exports = rulesRecommended;
