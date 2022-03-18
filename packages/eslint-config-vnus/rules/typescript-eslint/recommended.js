// @ts-check

// ✅ Recommended
// 🔧 Fixable
// 💭 Requires type information

// ✨ Customized
// 🛑 Disabled

/** @type {import("eslint").Linter.Config} */
const rulesRecommended = {
    rules: {
        // ✅ requires that member overloads be consecutive
        "@typescript-eslint/adjacent-overload-signatures": ["error"],

        // ✨ 🔧 requires using T[] for arrays, Array<T & U> for non-simple array types
        "@typescript-eslint/array-type": ["error", { default: "array-simple", readonly: "array-simple" }],

        // ✨ ✅ bans @ts-<directive> comments from being used or requires descriptions after directive
        "@typescript-eslint/ban-ts-comment": [
            "error",
            {
                "ts-expect-error": "allow-with-description",
                "ts-ignore": "allow-with-description",
                "ts-nocheck": "allow-with-description",
                "ts-check": false, // allow
                minimumDescriptionLength: 3,
            },
        ],

        // ✨ 🔧 bans @ts-<directive> comments from being used or requires descriptions after directive
        "@typescript-eslint/ban-tslint-comment": ["error"],

        // ✨ ✅ 🔧 bans specific types from being used
        "@typescript-eslint/ban-types": [
            "error",
            {
                extendDefaults: true, // quirks: https://github.com/microsoft/TypeScript/issues/21732
                types: {
                    object: false,
                    Object: {
                        message: "Use object instead",
                        fixWith: "object",
                    },
                    "{}": {
                        message: "Use object instead",
                        fixWith: "object",
                    },
                },
            },
        ],

        // ✨ enforces consistent usage of type assertions
        "@typescript-eslint/consistent-type-assertions": [
            "error",
            { assertionStyle: "as", objectLiteralTypeAssertions: "allow" },
        ],

        // ✨ 🔧 enforces consistent usage of type imports
        "@typescript-eslint/consistent-type-imports": [
            "error",
            { prefer: "type-imports", disallowTypeAnnotations: false },
        ],

        // 🛑 ✨ qtoo annoying; removed in v3 https://github.com/typescript-eslint/typescript-eslint/issues/2603#issuecomment-699667479
        "@typescript-eslint/explicit-function-return-type": "off",

        // ✨ 🔧 requires explicit accessibility modifiers on class properties and methods
        "@typescript-eslint/explicit-member-accessibility": [
            "error",
            {
                accessibility: "no-public",
                overrides: {
                    // use "@typescript-eslint/no-parameter-properties" instead of setting "explicit" here
                    parameterProperties: "off",
                },
            },
        ],

        // 🛑 ✨ too annoying; removed in v5 https://github.com/typescript-eslint/typescript-eslint/issues/3746#issuecomment-903183973
        "@typescript-eslint/explicit-module-boundary-types": "off",

        // ✨ requires a consistent member declaration order
        "@typescript-eslint/member-ordering": [
            "error",
            {
                default: {
                    // prettier-ignore
                    memberTypes: [
                        'signature',

                        'public-static-field',     'protected-static-field',     'private-static-field',
                        'public-static-method',    'protected-static-method',    'private-static-method',

                        'public-decorated-field',  'protected-decorated-field',  'private-decorated-field',
                        'public-instance-field',   'protected-instance-field',   'private-instance-field',
                        'public-abstract-field',   'protected-abstract-field',   'private-abstract-field',

                        'public-constructor',      'protected-constructor',      'private-constructor',

                        'public-decorated-method', 'protected-decorated-method', 'private-decorated-method',
                        'public-instance-method',  'protected-instance-method',  'private-instance-method',
                        'public-abstract-method',  'protected-abstract-method',  'private-abstract-method',
                    ],
                    order: "as-written",
                },
            },
        ],

        // 🛑 ✅ 🔧 too annoying; allows the declaration of empty interfaces
        "@typescript-eslint/no-empty-interface": "off",

        // 🛑 ✅ 🔧 too annoying; allows usage of the any type
        "@typescript-eslint/no-explicit-any": "off",

        // ✅ 🔧 disallows extra non-null assertion
        "@typescript-eslint/no-extra-non-null-assertion": ["error"],

        // ✨ forbids the use of classes as namespaces
        "@typescript-eslint/no-extraneous-class": [
            "error",
            {
                allowConstructorOnly: true,
                allowEmpty: true,
                allowStaticOnly: false,
                allowWithDecorator: true,
            },
        ],

        // 🛑 ✅ 🔧 sometimes annotation can be good for consistency / documentation; allows explicit type declarations for variables or parameters initialized to a number, string, or boolean
        "@typescript-eslint/no-inferrable-types": "off",

        // ✨ disallows usage of void type outside of generic or return types
        "@typescript-eslint/no-invalid-void-type": [
            "error",
            { allowInGenericTypeArguments: true, allowAsThisParameter: true },
        ],

        // ✅ enforces valid definition of new and constructor
        "@typescript-eslint/no-misused-new": ["error"],

        // ✨ ✅ allows the use of custom TypeScript modules and namespaces with `declare` keyword or in `.d.ts` files
        "@typescript-eslint/no-namespace": ["error", { allowDeclarations: true, allowDefinitionFiles: true }],

        // ✨ disallows using a non-null assertion in the left operand of the nullish coalescing operator
        "@typescript-eslint/no-non-null-asserted-nullish-coalescing": ["error"],

        // ✅ disallows using a non-null assertion after an optional chain expression
        "@typescript-eslint/no-non-null-asserted-optional-chain": ["error"],

        // ✅ disallows non-null assertions using the ! postfix operator; forces usage of ! to be properly documented with "eslint-comments/require-description"
        "@typescript-eslint/no-non-null-assertion": ["error"],

        // ✨ allows the use of parameter properties in class constructors, except `readonly`
        "@typescript-eslint/no-parameter-properties": [
            "error",
            { allows: ["private", "protected", "public", "private readonly", "protected readonly", "public readonly"] },
        ],

        // ✅ disallows aliasing this
        "@typescript-eslint/no-this-alias": ["error"],

        // ✅ 🔧 disallows unnecessary constraints on generic types
        "@typescript-eslint/no-unnecessary-type-constraint": ["error"],
    },
};

module.exports = rulesRecommended;
