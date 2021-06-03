import type { Linter } from "eslint";
import configPrettierIndex from "eslint-config-prettier/index";

const config: Linter.Config = {
    rules: {
        ...configPrettierIndex.rules,
    },
};

export default config;
