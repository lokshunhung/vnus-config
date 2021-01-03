import type { Linter } from 'eslint';

declare module 'eslint' {
    namespace Linter {
        interface ParserOptions {
            jsxPragma?: string;
            jsxFragmentName?: string | null;
            lib?: string[];

            project?: string | string[];
            projectFolderIgnoreList?: string[];
            tsconfigRootDir?: string;
            extraFileExtensions?: string[];
            warnOnUnsupportedTypeScriptVersion?: boolean;
        }
    }
}

const _require = require;

const config: Linter.Config = {
    plugins: ['@typescript-eslint', 'eslint-comments', 'react', 'react-hooks'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2018,
        ecmaFeatures: { jsx: true },
        project: './tsconfig.*?.json',
    },
    settings: {
        react: { version: 'detect' },
    },
    env: {
        node: true,
    },
    rules: {
        ..._require('../rules/eslint-recommended').rules,
        ..._require('../rules/typescript-eslint-recommended').rules,
        ..._require('../rules/eslint-comments-recommended').rules,
        ..._require('../rules/react').rules,
        ..._require('../rules/prettier-eslint').rules,
        ..._require('../rules/prettier-typescript-eslint').rules,
        ..._require('../rules/prettier-react').rules,
    },
};

export default config;
