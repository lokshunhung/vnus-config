import { execRaw } from '../utils';

execRaw`
    yarn prettier \
    --write "packages/types/**/*.ts"
`;
