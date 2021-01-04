import type { Linter } from 'eslint';
import rulesOverridesESLintRecommended from './typescript-eslint/overrides-eslint-recommended';
import rulesRecommended from './typescript-eslint/recommended';

const config: Linter.Config = {
    plugins: ['@typescript-eslint'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2018,
    },
    rules: {
        ...rulesOverridesESLintRecommended.rules,
        ...rulesRecommended.rules,
    },
};

export default config;
