import * as prettier from 'prettier';

/** @returns {import('rollup').Plugin} */
export function pluginPrettierFormatOutput() {
    /** @type {prettier.Options | null} */
    let prettierOptions;
    return {
        name: 'prettier-format-output',
        async renderChunk(code, chunk, options) {
            if (!prettierOptions) prettierOptions = await prettier.resolveConfig(process.cwd());
            return { code: prettier.format(code, { ...prettierOptions, filepath: chunk.fileName }) };
        },
    };
}
