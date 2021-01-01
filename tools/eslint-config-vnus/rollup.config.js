import pluginCommonjs from '@rollup/plugin-commonjs';
import pluginNodeResolve from '@rollup/plugin-node-resolve';
import pluginTypescript from '@rollup/plugin-typescript';
import * as path from 'path';
import * as prettier from 'prettier';
import { terser as pluginTerser } from 'rollup-plugin-terser';

/** @param {string} p */
const joinRoot = (p) => path.join(__dirname, '../../', p);

/** @returns {import("rollup").Plugin} */
const pluginPrettierFormatOutput = () => {
    /** @type {prettier.Options | null} */
    let prettierOptions;
    return {
        name: 'prettier-format-output',
        async renderChunk(code, chunk, options) {
            if (!prettierOptions) prettierOptions = await prettier.resolveConfig(process.cwd());
            return { code: prettier.format(code, { ...prettierOptions, filepath: chunk.fileName }) };
        },
    };
};

/** @type {import('rollup').RollupOptions} */
const config = {
    input: {
        'eslint-recommended': joinRoot('packages/eslint-config-vnus/eslint-recommended.ts'),
    },
    output: {
        dir: joinRoot('dist/eslint-config-vnus'),
        format: 'cjs',
        exports: 'default',
        strict: false,
    },
    plugins: [
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
        pluginPrettierFormatOutput(),
    ],
};

export default config;
