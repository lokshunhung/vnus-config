import pluginBabel from '@rollup/plugin-babel';
import pluginCommonjs from '@rollup/plugin-commonjs';
import pluginNodeResolve from '@rollup/plugin-node-resolve';
import pluginTypescript from '@rollup/plugin-typescript';
import * as path from 'path';

/** @param {string} p */
const joinRoot = (p) => path.join(__dirname, '../../', p);

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
        pluginBabel({
            include: ['**/node_modules/confusing-browser-globals/**'],
            babelrc: false,
            babelHelpers: 'bundled',
            comments: false,
        }),
        pluginTypescript({
            tsconfig: joinRoot('tsconfig.json'),
            module: 'ESNext',
            removeComments: true,
        }),
    ],
};

export default config;
