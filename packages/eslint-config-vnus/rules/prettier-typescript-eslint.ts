import type { Linter } from 'eslint';
import configPrettierTypeScriptESLint from 'eslint-config-prettier/@typescript-eslint';

const config: Linter.Config = {
    rules: {
        ...configPrettierTypeScriptESLint.rules,
    },
};

export default config;
