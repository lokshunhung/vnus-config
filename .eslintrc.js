require("ts-node").register({ transpileOnly: true });

/** @type {import('./packages/types').ESLintConfig} */
const config = {
    extends: [
        require.resolve("./tools/dogfood-eslint/eslint-recommended"),
        require.resolve("./tools/dogfood-eslint/prettier-eslint"),
    ],
    parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
    },
    overrides: [
        {
            files: ["*.ts"],
            extends: [
                require.resolve("./tools/dogfood-eslint/typescript-eslint-recommended"),
                require.resolve("./tools/dogfood-eslint/typescript-eslint-requiring-type-checking"),
                require.resolve("./tools/dogfood-eslint/prettier-typescript-eslint.js"),
            ],
        },
        {
            files: ["*.spec.js", "*.spec.ts"],
            extends: [require.resolve("./tools/dogfood-eslint/jest-recommended")],
        },
    ],
};

module.exports = config;
