/** @type {import('./packages/types').ESLintConfig} */
const config = {
    overrides: [
        {
            files: ['*.js'],
            extends: [require.resolve('./tools/dogfood-eslint/js')],
        },
        {
            files: ['*.ts'],
            extends: [require.resolve('./tools/dogfood-eslint/ts')],
        },
        {
            files: ['*.spec.js', '*.spec.ts'],
            extends: [require.resolve('./tools/dogfood-eslint/jest')],
        },
    ],
};

module.exports = config;
