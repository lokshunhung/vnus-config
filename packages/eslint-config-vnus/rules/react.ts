import type { Linter } from 'eslint';
import rulesCustom from './react/custom';
import rulesRecommended from './react/recommended';

const config: Linter.Config = {
    rules: {
        ...rulesRecommended.rules,
        ...rulesCustom.rules,
    },
};

export default config;
