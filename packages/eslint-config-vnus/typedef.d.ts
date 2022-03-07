declare module "@typescript-eslint/eslint-plugin/dist/configs/eslint-recommended" {
    import type { Linter } from "eslint";
    declare const _default: Linter.Config;
    export = _default;
}

declare module "eslint-config-prettier" {
    import type { Linter } from "eslint";
    declare const config: Linter.Config;
    export = config;
}
