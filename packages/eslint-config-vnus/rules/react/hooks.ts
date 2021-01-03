import type { Linter } from 'eslint';

const rulesHooks: Linter.Config = {
    rules: {
        'react-hooks/exhaustive-deps': ['error', { additionalHooks: 'useRecoilCallback' }],
        'react-hooks/rules-of-hooks': ['error'],
    },
};

export default rulesHooks;
