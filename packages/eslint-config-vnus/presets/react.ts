import type { ESLintConfig } from '../../types';

const config: ESLintConfig = {
    extends: [
        require.resolve('../rules/eslint-recommended'),
        require.resolve('../rules/react'),
        require.resolve('../rules/prettier-eslint'),
        require.resolve('../rules/prettier-react'),
    ],
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            extends: [
                require.resolve('../rules/typescript-eslint-recommended'),
                require.resolve('../rules/typescript-eslint-requiring-type-checking'),
                require.resolve('../rules/prettier-typescript-eslint'),
            ],
        },
        {
            files: ['*.spec.js', '*.spec.jsx', '*.spec.ts', '*.spec.tsx'],
            extends: [
                require.resolve('../rules/jest-recommended'),
                require.resolve('../rules/jest-dom-recommended'),
                require.resolve('../rules/testing-library-react'),
            ],
        },
    ],
};

export default config;
