declare module "@typescript-eslint/eslint-plugin/dist/configs/eslint-recommended";

declare module "eslint-config-prettier" {
    import type { Linter } from "eslint";
    declare const config: Linter.Config;
    export = config;
}
