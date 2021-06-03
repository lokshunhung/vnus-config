import { execRaw } from "../utils";

execRaw`
    yarn eslint \
    --ext .js,.ts \
    packages/eslint-config-vnus
`;
