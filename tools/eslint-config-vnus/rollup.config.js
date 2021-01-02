import pluginCommonJS from '@rollup/plugin-commonjs';
import pluginNodeResolve from '@rollup/plugin-node-resolve';
import pluginReplace from '@rollup/plugin-replace';
import pluginTypeScript from '@rollup/plugin-typescript';
import * as fs from 'fs';
import * as path from 'path';
import { terser as pluginTerser } from 'rollup-plugin-terser';
import {
    pluginAddMITLicenseFile,
    pluginCleanOutputDirOnce,
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

/** @type {import('rollup').RollupOptions} */
const config = {
    input: {
        ...rulesInput,
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
            rootPackageJSON: joinRoot('package.json'),
        }),
        pluginAddMITLicenseFile(),
        pluginPrettierFormatOutput(),
    ],
};

export default config;
