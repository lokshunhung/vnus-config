import * as fs from 'fs';
import * as path from 'path';
import * as prettier from 'prettier';

/**
 * @param {string} directory
 */
function cleanDirectory(directory) {
    const nodeMajorVersion = Number(process.version.replace(/^v/, '').split('.')[0]);
    if (nodeMajorVersion >= 14) {
        fs.rmSync(directory, { recursive: true, force: true });
    } else {
        fs.rmdirSync(directory, { recursive: true });
    }
    ensureDirectory(directory);
}

/**
 * @param {string} directory
 */
function ensureDirectory(directory) {
    if (!(fs.existsSync(directory) && fs.statSync(directory).isDirectory())) {
        fs.mkdirSync(directory, { recursive: true });
    }
}

/**
 * @returns {import('rollup').Plugin}
 */
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

/**
 * Copies `inputPackageJSON` to `options.output.dir`,
 * removes `package.json#devDependencies`, `package.json#optionalDependencies`,
 * adds unresolved dependencies to `package.json#dependencies`,
 * replaces versions of `package.json#dependencies`, `package.json#peerDependencies` with caret versions of packages resolved from root.
 *
 * @param {{
 *     inputPackageJSON: string;
 *     rootDirectory: string;
 * }} pluginOptions
 * @returns {import('rollup').Plugin}
 */
export function pluginGeneratePackageJSONWithDependencies(pluginOptions) {
    const { inputPackageJSON, rootDirectory } = pluginOptions;
    /** @param {string} m */
    const normalizeImport = (m) => {
        const segments = m.split(/[\\/]/);
        return `${segments[0]}`.startsWith('@') ? `${segments[0]}/${segments[1]}` : `${segments[0]}`;
    };
    /** @type {prettier.Options | null} */
    let prettierOptions;
    return {
        name: 'generate-package-json-with-dependencies',
        buildStart(options) {
            this.addWatchFile(inputPackageJSON);
            this.addWatchFile(path.join(rootDirectory, 'package.json'));
        },
        async generateBundle(options, bundle, isWrite) {
            if (typeof options.dir !== 'string') {
                throw new Error('Unable to write package.json, make sure "options.output.dir" is set.');
            }
            if (!prettierOptions) {
                prettierOptions = await prettier.resolveConfig(rootDirectory);
            }
            const pkg = JSON.parse(await fs.promises.readFile(inputPackageJSON, { encoding: 'utf8' }));
            const outputPath = path.join(`${options.dir}`, 'package.json');

            const peerDepsSet = new Set();
            Object.values(bundle).forEach((chunk) => {
                if ('imports' in chunk && chunk.imports)
                    chunk.imports.forEach((d) => {
                        peerDepsSet.add(normalizeImport(d));
                    });
            });
            Object.keys(pkg.peerDependencies || {}).forEach((d) => {
                peerDepsSet.add(d);
            });
            ['fs', 'path'].forEach((d) => peerDepsSet.delete(d));

            /** @type {Record<string, string>} */
            const peerDependencies = {};
            peerDepsSet.forEach((d) => {
                try {
                    const p = require.resolve(path.join(d, 'package.json'), { paths: [rootDirectory] });
                    const version = `${require(p).version}`;
                    peerDependencies[d] = /^\d/.test(version) ? `^${version}` : version;
                } catch (error) {
                    throw new Error(`Cannot resolve module "${d}" from root package.json directory.`);
                }
            });

            /** @type {Record<string, string>} */
            const dependencies = {};
            Object.keys(pkg.dependencies || {}).forEach((d) => {
                try {
                    const p = require.resolve(path.join(d, 'package.json'), { paths: [rootDirectory] });
                    const version = `${require(p).version}`;
                    dependencies[d] = /^\d/.test(version) ? `^${version}` : version;
                } catch (error) {
                    throw new Error(`Cannot resolve module "${d}" from root package.json directory.`);
                }
            });

            delete pkg.devDependencies;
            delete pkg.optionalDependencies;

            const contents = prettier.format(
                JSON.stringify({
                    ...pkg,
                    ...(Object.keys(dependencies).length > 0 && { dependencies }),
                    ...(Object.keys(peerDependencies).length > 0 && { peerDependencies }),
                }),
                { ...prettierOptions, filepath: `package.json` },
            );
            ensureDirectory(path.dirname(outputPath));
            await fs.promises.writeFile(outputPath, contents);
        },
    };
}

/**
 * @param {{ files: Record<string, string> }} pluginOptions
 * @returns {import('rollup').Plugin}
 */
export function pluginCopyFilesToOutDir(pluginOptions) {
    const { files } = pluginOptions;
    return {
        name: 'copy-files-to-out-dir',
        async generateBundle(options, bundle, isWrite) {
            if (typeof options.dir !== 'string') {
                throw new Error('Unable to write LICENSE, make sure "options.output.dir" is set.');
            }
            Object.entries(files).map(async ([k, v]) => {
                const dest = path.join(`${options.dir}`, k);
                ensureDirectory(path.dirname(dest));
                await fs.promises.copyFile(v, dest);
            });
        },
    };
}

/**
 * @returns {import('rollup').Plugin}
 */
export function pluginCleanOutputDirOnce() {
    let hasCleaned = false;
    return {
        name: 'clean-output-dir-once',
        outputOptions(options) {
            if (!hasCleaned) {
                if (typeof options.dir !== 'string') {
                    throw new Error('Cannot clean output dir, make sure "options.output.dir" is set.');
                }
                cleanDirectory(options.dir);
                hasCleaned = true;
            }
            return options;
        },
    };
}
