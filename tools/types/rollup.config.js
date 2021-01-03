import * as path from 'path';
import pluginDTS from 'rollup-plugin-dts';
import {
    pluginAddMITLicenseFile,
    pluginCleanOutputDirOnce,
    pluginGeneratePackageJSONWithDependencies,
    pluginPrettierFormatOutput,
} from '../utils';

/** @param {string[]} p */
const joinRoot = (...p) => path.join(__dirname, '../../', ...p);

/** @param {string[]} p */
const joinPkg = (...p) => path.relative(process.cwd(), joinRoot(`packages/types/`, ...p));

/** @type {import('rollup').RollupOptions} */
const config = {
    input: {
        index: joinPkg('index.ts'),
    },
    output: {
        dir: joinRoot('dist/types'),
        format: 'es',
    },
    external: ['@jest/types', 'prettier'],
    plugins: [
        pluginDTS({
            respectExternal: true,
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
