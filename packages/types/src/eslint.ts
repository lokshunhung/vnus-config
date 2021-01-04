declare namespace ESLint {
    // Copied from "@types/eslint"
    type Prepend<Tuple extends any[], Addend> = ((_: Addend, ..._1: Tuple) => any) extends (..._: infer Result) => any
        ? Result
        : never;

    type Severity = 0 | 1 | 2;

    type RuleLevel = Severity | 'off' | 'warn' | 'error';
    type RuleLevelAndOptions<Options extends any[] = any[]> = Prepend<Partial<Options>, RuleLevel>;

    type RuleEntry<Options extends any[] = any[]> = RuleLevel | RuleLevelAndOptions<Options>;

    interface RulesRecord {
        [rule: string]: RuleEntry;
    }

    interface HasRules {
        rules?: Partial<RulesRecord>;
    }

    interface BaseConfig extends HasRules {
        $schema?: string;
        env?: { [name: string]: boolean };
        extends?: string | string[];
        globals?: { [name: string]: boolean | 'readonly' | 'readable' | 'writable' | 'writeable' };
        noInlineConfig?: boolean;
        overrides?: ConfigOverride[];
        parser?: string;
        parserOptions?: ParserOptions;
        plugins?: string[];
        processor?: string;
        reportUnusedDisableDirectives?: boolean;
        settings?: { [name: string]: any };
    }

    interface ConfigOverride extends BaseConfig {
        excludedFiles?: string | string[];
        files: string | string[];
    }

    interface Config extends BaseConfig {
        ignorePatterns?: string | string[];
        root?: boolean;
    }

    interface ParserOptions {
        ecmaVersion?: 3 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 2015 | 2016 | 2017 | 2018 | 2019 | 2020;
        sourceType?: 'script' | 'module';
        ecmaFeatures?: {
            globalReturn?: boolean;
            impliedStrict?: boolean;
            jsx?: boolean;
            experimentalObjectRestSpread?: boolean;
            [key: string]: any;
        };
        [key: string]: any;
    }

    // Augment with @typescript-eslint/parser options
    interface ParserOptions {
        jsxPragma?: string;
        jsxFragmentName?: string | null;
        lib?: string[];

        project?: string | string[];
        projectFolderIgnoreList?: string[];
        tsconfigRootDir?: string;
        extraFileExtensions?: string[];
        warnOnUnsupportedTypeScriptVersion?: boolean;
    }
}

export type ESLintConfig = ESLint.Config;
