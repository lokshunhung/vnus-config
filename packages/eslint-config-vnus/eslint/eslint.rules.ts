import type { Linter } from 'eslint';
import rulesBestPractices from './best-practices';
import rulesECMAScript6 from './ecmascript-6';
import rulesPossibleErrors from './possible-errors';
import rulesStylisticIssues from './stylistic-issues';
import rulesVariables from './variables';

const config: Linter.Config = {
    rules: {
        ...rulesPossibleErrors.rules,
        ...rulesBestPractices.rules,
        ...rulesVariables.rules,
        ...rulesStylisticIssues.rules,
        ...rulesECMAScript6.rules,
    },
};

export default config;
