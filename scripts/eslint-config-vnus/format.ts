import { execRaw } from '../utils';

execRaw`
    yarn prettier \
    --write "**/*.ts"
`;
