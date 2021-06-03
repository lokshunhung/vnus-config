import { execRaw } from "../utils";

execRaw`
    yarn prettier \
    --write "packages/eslint-config-vnus/**/*.ts"
`;
