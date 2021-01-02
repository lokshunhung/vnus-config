import type { Linter } from 'eslint';

const _require = require;

const config: Linter.Config = {
    plugins: ['jest'],
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
        ..._require('../rules/jest').rules,
    },
};

export default config;
