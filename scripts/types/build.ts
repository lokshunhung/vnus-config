import { execRaw } from '../utils';

execRaw`
    yarn rollup \
    --config tools/types/rollup.config.js
`;
