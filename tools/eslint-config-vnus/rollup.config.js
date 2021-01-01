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
const inputTSFiles = {};
fs.readdirSync(joinPkg(''), { encoding: 'utf8', withFileTypes: true })
    .filter((e) => e.isFile())
    .filter((e) => e.name.endsWith('.ts'))
    .forEach((e) => {
        inputTSFiles[e.name.replace(/\.ts$/, '')] = joinPkg(e.name);
    });

/** @type {import('rollup').RollupOptions} */
const config = {
    input: {
        ...inputTSFiles,
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
