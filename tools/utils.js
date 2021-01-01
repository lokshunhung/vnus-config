import * as fs from 'fs';
import * as path from 'path';
import * as prettier from 'prettier';

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
 * Copies `inputPackageJson` to `options.output.dir`,
 * removes `package.json#devDependencies`, `package.json#optionalDependencies`,
 * adds unresolved dependencies to `package.json#dependencies`,
 * replaces versions of `package.json#dependencies`, `package.json#peerDependencies` with caret versions of `rootPackageJson`.
 *
 * @param {{
 *     inputPackageJson: string;
 *     rootPackageJson: string;
 * }} options
 * @returns {import('rollup').Plugin}
 */
export function pluginGeneratePkgJsonWithDependencies(options) {
    const { inputPackageJson, rootPackageJson } = options;
    /** @param {string} m */
    const normalizeImport = (m) => {
        const segments = m.split(/[\\/]/);
        return `${segments[0]}`.startsWith('@') ? `${segments[0]}/${segments[1]}` : `${segments[0]}`;
    };
    /** @type {prettier.Options | null} */
    let prettierOptions;
    return {
        name: 'generate-pkg-json-with-dependencies',
        buildStart(options) {
            this.addWatchFile(inputPackageJson);
            this.addWatchFile(rootPackageJson);
        },
        async generateBundle(options, bundle, isWrite) {
            if (typeof options.dir !== 'string') {
                throw new Error('Unable to write package.json, make sure "options.output.dir" is set.');
            }
            if (!prettierOptions) {
                prettierOptions = await prettier.resolveConfig(process.cwd());
            }
            const pkg = JSON.parse(await fs.promises.readFile(inputPackageJson, { encoding: 'utf8' }));
            const rootPkg = JSON.parse(await fs.promises.readFile(rootPackageJson, { encoding: 'utf8' }));
            const outputPath = path.join(`${options.dir}`, 'package.json');

            const depsSet = new Set();
            Object.values(bundle).forEach((chunk) => {
                if ('imports' in chunk && chunk.imports)
                    chunk.imports.forEach((d) => {
                        depsSet.add(normalizeImport(d));
                    });
            });
            Object.keys(pkg.dependencies || {}).forEach((d) => {
                depsSet.add(d);
            });

            /** @type {Record<string, string>} */
            const dependencies = {};
            depsSet.forEach((d) => {
                if (!(d in rootPkg.devDependencies))
                    throw new Error(`Unable to find module "${d}" in root package.json#devDependencies.`);
                const version = rootPkg.devDependencies[d];
                dependencies[d] = /^\d/.test(version) ? `^${version}` : version;
            });

            /** @type {Record<string, string>} */
            const peerDependencies = {};
            Object.keys(pkg.peerDependencies || {}).forEach((d) => {
                if (!(d in rootPkg.devDependencies))
                    throw new Error(`Unable to find module "${d}" in root package.json#devDependencies.`);
                const version = rootPkg.devDependencies[d];
                peerDependencies[d] = /^\d/.test(version) ? `^${version}` : version;
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
