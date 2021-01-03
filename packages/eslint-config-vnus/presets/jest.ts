import type { Linter } from 'eslint';

const _require = require;

const config: Linter.Config = {
    plugins: ['jest', 'jest-dom', 'testing-library'],
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2018,
        ecmaFeatures: { jsx: true },
    },
    settings: {
        react: { version: 'detect' },
    },
    env: {
        jest: true,
        node: true,
    },
    rules: {
        ..._require('../rules/jest-recommended').rules,
        ..._require('../rules/jest-dom-recommended').rules,
        ..._require('../rules/testing-library-react').rules,
    },
};

export default config;
