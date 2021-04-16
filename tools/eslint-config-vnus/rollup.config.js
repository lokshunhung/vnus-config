import pluginCommonJS from '@rollup/plugin-commonjs';
import pluginNodeResolve from '@rollup/plugin-node-resolve';
import pluginReplace from '@rollup/plugin-replace';
import pluginTypeScript from '@rollup/plugin-typescript';
import * as fs from 'fs';
import * as path from 'path';
import { terser as pluginTerser } from 'rollup-plugin-terser';
import {
    pluginCleanOutputDirOnce,
    pluginCopyFilesToOutDir,
    pluginGeneratePackageJSONWithDependencies,
    pluginPrettierFormatOutput,
} from '../utils';

/** @param {string[]} p */
const joinRoot = (...p) => path.join(__dirname, '../../', ...p);

/** @param {string[]} p */
const joinPkg = (...p) => path.relative(process.cwd(), joinRoot(`packages/eslint-config-vnus/`, ...p));

/** @type {Record<string, string>} */
const rulesInput = {};
fs.readdirSync(joinPkg('rules'), { encoding: 'utf8' })
    .filter((f) => f.endsWith('.ts'))
    .map((f) => path.basename(f, '.ts'))
    .map((f) => `rules/${f}`)
    .forEach((p) => {
        rulesInput[p] = joinPkg(`${p}.ts`);
    });

/** @type {Record<string, string>} */
const presetsInput = {};
fs.readdirSync(joinPkg('presets'), { encoding: 'utf8' })
    .filter((f) => f.endsWith('.ts'))
    .map((f) => path.basename(f, '.ts'))
    .map((f) => `presets/${f}`)
    .forEach((p) => {
        presetsInput[p] = joinPkg(`${p}.ts`);
    });

/** @type {import('rollup').RollupOptions} */
const config = {
    input: {
        ...rulesInput,
        ...presetsInput,
    },
    output: {
        dir: joinRoot('dist/eslint-config-vnus'),
        format: 'cjs',
        exports: 'default',
        strict: false,
    },
    plugins: [
        pluginReplace({
            preventAssignment: true,
            values: {
                'process.env.ESLINT_CONFIG_PRETTIER_NO_DEPRECATED': JSON.stringify(false),
            },
        }),
        pluginNodeResolve(),
        pluginCommonJS(),
        pluginTypeScript({
            tsconfig: joinRoot('tsconfig.json'),
            module: 'ESNext',
            removeComments: true,
        }),
        pluginTerser({
            mangle: false,
            compress: false,
        }),
        pluginCleanOutputDirOnce(),
        pluginGeneratePackageJSONWithDependencies({
            inputPackageJSON: joinPkg('package.json'),
            rootDirectory: joinRoot(),
        }),
        pluginCopyFilesToOutDir({
            files: {
                LICENSE: joinPkg('LICENSE'),
            },
        }),
        pluginPrettierFormatOutput(),
    ],
};

export default config;
