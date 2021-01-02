import type { Linter } from 'eslint';
import rulesOverridesESLintRecommended from './overrides-eslint-recommended';
import rulesRecommended from './recommended';

const config: Linter.Config = {
    rules: {
        ...rulesOverridesESLintRecommended.rules,
        ...rulesRecommended.rules,
    },
};

export default config;
