import type { Linter } from 'eslint';
import rulesOverridesEslintRecommended from './overrides-eslint-recommended';
import rulesRecommended from './recommended';

const config: Linter.Config = {
    rules: {
        ...rulesOverridesEslintRecommended.rules,
        ...rulesRecommended.rules,
    },
};

export default config;
