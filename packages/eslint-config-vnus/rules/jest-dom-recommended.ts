import type { Linter } from 'eslint';

// 👍 indicates that a rule is recommended for all users
// 🔧 indicates that a rule is fixable

const config: Linter.Config = {
    plugins: ['jest-dom'],
    rules: {
        // 👍 🔧 prefer toBeChecked over checking attributes
        'jest-dom/prefer-checked': ['error'],

        // 👍 🔧 prefer toBeEmpty over checking innerHTML
        'jest-dom/prefer-empty': ['error'],

        // 👍 🔧 prefer toBeDisabled or toBeEnabled over checking attributes
        'jest-dom/prefer-enabled-disabled': ['error'],

        // 👍 🔧 prefer toHaveFocus over checking document.activeElement
        'jest-dom/prefer-focus': ['error'],

        // 👍 🔧 prefer .toBeInTheDocument() for asserting the existence of a DOM node
        'jest-dom/prefer-in-document': ['error'],

        // 👍 🔧 prefer toBeRequired over checking properties
        'jest-dom/prefer-required': ['error'],

        // 👍 🔧 prefer toHaveAttribute over checking getAttribute/hasAttribute
        'jest-dom/prefer-to-have-attribute': ['error'],

        // 👍 🔧 prefer toHaveClass over checking element className
        'jest-dom/prefer-to-have-class': ['error'],

        // 👍 🔧 prefer toHaveStyle over checking element style
        'jest-dom/prefer-to-have-style': ['error'],

        // 👍 🔧 prefer toHaveTextContent over checking element.textContent
        'jest-dom/prefer-to-have-text-content': ['error'],

        // 👍 🔧 prefer toHaveValue over checking element.value
        'jest-dom/prefer-to-have-value': ['error'],
    },
};

export default config;
