import type { Linter } from 'eslint';
import rulesOverridesESLintRecommended from './typescript-eslint/overrides-eslint-recommended';
import rulesRecommended from './typescript-eslint/recommended';

const config: Linter.Config = {
    rules: {
        ...rulesOverridesESLintRecommended.rules,
        ...rulesRecommended.rules,
    },
};

export default config;
