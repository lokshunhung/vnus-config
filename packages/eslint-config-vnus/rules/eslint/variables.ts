// @ts-expect-error -- untyped module
import confusingBrowserGlobals from "confusing-browser-globals";
import type { Linter } from "eslint";

// ✅ Recommended
// 🔧 Fixable

// ✨ Customized
// 🛑 Disabled

const rulesVariables: Linter.Config = {
    rules: {},
};

export default rulesVariables;
