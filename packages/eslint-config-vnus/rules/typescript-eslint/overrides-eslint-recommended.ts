import pluginTypeScriptESLint from '@typescript-eslint/eslint-plugin/dist/configs/eslint-recommended';
import type { Linter } from 'eslint';

const rulesOverwritesESLintRecommended: Linter.Config = {
    rules: {
        ...(pluginTypeScriptESLint.overrides as Linter.Config[])[0].rules,
    },
};

export default rulesOverwritesESLintRecommended;
