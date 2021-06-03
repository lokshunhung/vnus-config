import { execRaw } from "../utils";

execRaw`
    yarn rollup \
    --config tools/eslint-config-vnus/rollup.config.js
`;
