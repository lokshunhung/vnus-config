import pluginCommonjs from '@rollup/plugin-commonjs';
import pluginNodeResolve from '@rollup/plugin-node-resolve';
import pluginReplace from '@rollup/plugin-replace';
import pluginTypescript from '@rollup/plugin-typescript';
import * as path from 'path';
import { terser as pluginTerser } from 'rollup-plugin-terser';
import { pluginGeneratePkgJsonWithDependencies, pluginPrettierFormatOutput } from '../utils';

/** @param {string[]} p */
const joinRoot = (...p) => path.join(__dirname, '../../', ...p);

/** @param {string[]} p */
const joinPkg = (...p) => path.relative(process.cwd(), joinRoot(`packages/eslint-config-vnus/`, ...p));

/** @type {import('rollup').RollupOptions} */
const config = {
    input: {
        'eslint-recommended': joinPkg('eslint-recommended.ts'),
        jest: joinPkg('jest.ts'),
        'prettier-eslint': joinPkg('prettier-eslint.ts'),
        'prettier-typescript-eslint': joinPkg('prettier-typescript-eslint.ts'),
        'typescript-eslint-recommended': joinPkg('typescript-eslint-recommended.ts'),
        'typescript-eslint-with-requiring-type-checking': joinPkg('typescript-eslint-with-requiring-type-checking.ts'),
    },
    output: {
        dir: joinRoot('dist/eslint-config-vnus'),
        format: 'cjs',
        exports: 'default',
        strict: false,
    },
    plugins: [
        pluginReplace({
            values: {
                'process.env.ESLINT_CONFIG_PRETTIER_NO_DEPRECATED': JSON.stringify(false),
            },
        }),
        pluginNodeResolve(),
        pluginCommonjs(),
        pluginTypescript({
            tsconfig: joinRoot('tsconfig.json'),
            module: 'ESNext',
            removeComments: true,
        }),
        pluginTerser({
            mangle: false,
            compress: false,
        }),
        pluginGeneratePkgJsonWithDependencies({
            inputPackageJson: joinPkg('package.json'),
            rootPackageJson: joinRoot('package.json'),
        }),
        pluginPrettierFormatOutput(),
    ],
};

export default config;
