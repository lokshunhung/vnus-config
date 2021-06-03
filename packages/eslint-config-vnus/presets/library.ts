import type { ESLintConfig } from "../../types";

const config: ESLintConfig = {
    extends: [
        require.resolve("../rules/eslint-recommended"),
        require.resolve("../rules/eslint-comments-recommended"),
        require.resolve("../rules/prettier-eslint"),
    ],
    overrides: [
        {
            files: ["*.ts"],
            extends: [
                require.resolve("../rules/typescript-eslint-recommended"),
                require.resolve("../rules/typescript-eslint-requiring-type-checking"),
                require.resolve("../rules/prettier-typescript-eslint"),
            ],
        },
        {
            files: ["*.spec.js", "*.spec.ts"],
            extends: [require.resolve("../rules/jest-recommended")],
        },
    ],
};

export default config;
