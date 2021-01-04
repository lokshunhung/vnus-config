import type { Linter } from 'eslint';
import rulesBestPractices from './eslint/best-practices';
import rulesECMAScript6 from './eslint/ecmascript-6';
import rulesPossibleErrors from './eslint/possible-errors';
import rulesStylisticIssues from './eslint/stylistic-issues';
import rulesVariables from './eslint/variables';

const config: Linter.Config = {
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2018,
    },
    env: {
        commonjs: true,
        node: true,
    },
    rules: {
        ...rulesPossibleErrors.rules,
        ...rulesBestPractices.rules,
        ...rulesVariables.rules,
        ...rulesStylisticIssues.rules,
        ...rulesECMAScript6.rules,
    },
};

export default config;
