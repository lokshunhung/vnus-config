import type { Linter } from 'eslint';
import configPrettierReact from 'eslint-config-prettier/react';

const config: Linter.Config = {
    rules: {
        ...configPrettierReact.rules,
    },
};

export default config;
