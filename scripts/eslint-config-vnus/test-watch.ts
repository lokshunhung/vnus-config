import { execRaw } from "../utils";

execRaw`
    yarn jest \
    --config tools/eslint-config-vnus/jest.config.js \
    --watch
`;
