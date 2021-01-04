import type { Linter } from 'eslint';

const config: Linter.Config = {
    plugins: ['testing-library'],
    rules: {
        'testing-library/await-async-query': ['warn'],
        'testing-library/await-async-utils': ['warn'],
        'testing-library/no-await-sync-query': ['warn'],
        'testing-library/no-debug': 'off',
        'testing-library/no-dom-import': ['warn', 'react'],
        'testing-library/no-render-in-setup': ['warn'],
        'testing-library/prefer-find-by': ['warn'],
        'testing-library/prefer-presence-queries': ['warn'],
        'testing-library/prefer-screen-queries': 'off',
        'testing-library/prefer-wait-for': ['warn'],
    },
};

export default config;
