const path = require("path");

/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
    preset: "ts-jest",
    rootDir: path.join(__dirname, "../../packages/eslint-config-vnus"),
};

module.exports = config;
