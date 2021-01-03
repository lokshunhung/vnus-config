import type { Linter } from 'eslint';

const _require = require;

const config: Linter.Config = {
    plugins: ['eslint-comments'],
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2018,
    },
    env: {
        node: true,
    },
    rules: {
        ..._require('../rules/eslint-recommended').rules,
        ..._require('../rules/eslint-comments-recommended').rules,
        ..._require('../rules/prettier-eslint').rules,
    },
};

export default config;
