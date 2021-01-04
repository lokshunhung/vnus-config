import type { Linter } from 'eslint';
import rulesCustom from './react/custom';
import rulesHooks from './react/hooks';
import rulesRecommended from './react/recommended';

const config: Linter.Config = {
    plugins: ['react', 'react-hooks'],
    parserOptions: {
        ecmaFeatures: { jsx: true },
    },
    settings: {
        react: { version: 'detect' },
    },
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
    },
    rules: {
        ...rulesRecommended.rules,
        ...rulesCustom.rules,
        ...rulesHooks.rules,
    },
};

export default config;
