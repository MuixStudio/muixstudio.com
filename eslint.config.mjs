import {
    GLOB_TESTS,
    combine,
    javascript,
    node,
    stylistic,
    typescript,
    unicorn,
} from '@antfu/eslint-config'
import globals from 'globals'
import storybook from 'eslint-plugin-storybook'
import prettier from 'eslint-plugin-prettier'
import { fixupPluginRules } from '@eslint/compat'
import reactHooks from 'eslint-plugin-react-hooks'
import sonar from 'eslint-plugin-sonarjs'

export default combine(
    stylistic({
        lessOpinionated: true,
        jsx: false,
        semi: false,
        quotes: 'single',
        overrides: {
            'style/indent': ['error', 2],
            'style/quotes': ['error', 'single'],
            'curly': ['error', 'multi-or-nest', 'consistent'],
            'style/comma-spacing': ['error', { before: false, after: true }],
            'style/quote-props': ['warn', 'consistent-as-needed'],
            'style/indent-binary-ops': 'off',
            'style/multiline-ternary': 'off',
            'antfu/top-level-function': 'off',
            'antfu/curly': 'off',
            'antfu/consistent-chaining': 'off',
            'style/brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
            'style/dot-location': ['error', 'property'],
            'style/object-curly-newline': [
                'error',
                { consistent: true, multiline: true },
            ],
            'style/object-property-newline': [
                'error',
                { allowAllPropertiesOnSameLine: true },
            ],
            'style/template-curly-spacing': ['error', 'never'],
            'style/keyword-spacing': 'off',
            'style/member-delimiter-style': 'off',
        },
    }),
    javascript({
        overrides: {
            'no-unused-vars': 'off',
        },
    }),
    typescript({
        overrides: {
            'ts/consistent-type-definitions': ['warn', 'type'],
            'ts/no-empty-object-type': 'off',
        },
    }),
    unicorn(),
    node(),
    {
        rules: {
            '@next/next/no-html-link-for-pages': 'off',
        },
    },
    {
        ignores: [
            '**/node_modules/*',
            '**/dist/',
            '**/build/',
            '**/out/',
            '**/.next/',
            '**/public/*',
            '**/*.json',
        ],
    },
    {
        rules: {
            'ts/no-require-imports': 'off',
            'no-console': 'off',
            'react-hooks/exhaustive-deps': 'warn',
            'react/display-name': 'off',
            'array-callback-return': [
                'error',
                {
                    allowImplicit: false,
                    checkForEach: false,
                },
            ],
            'camelcase': 'off',
            'default-case-last': 'error',
            'sort-imports': [
                'error',
                {
                    ignoreCase: false,
                    ignoreDeclarationSort: true,
                    ignoreMemberSort: false,
                    memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
                    allowSeparatedGroups: false,
                },
            ],
            'unused-imports/no-unused-vars': 'warn',
            'unused-imports/no-unused-imports': 'warn',
            'no-empty-function': 'error',
        },

        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.es2025,
                ...globals.node,
                React: 'readable',
                JSX: 'readable',
            },
        },
    },
    storybook.configs['flat/recommended'],
    {
        rules: reactHooks.configs.recommended.rules,
        plugins: {
            'react-hooks': reactHooks,
        },
    },
    {
        rules: {
            ...sonar.configs.recommended.rules,
            'sonarjs/cognitive-complexity': 'off',
            'sonarjs/no-nested-functions': 'warn',
            'sonarjs/no-nested-conditional': 'warn',
            'sonarjs/nested-control-flow': 'warn', // 3 levels of nesting
            'sonarjs/no-small-switch': 'off',
            'sonarjs/no-nested-template-literals': 'warn',
            'sonarjs/redundant-type-aliases': 'off',
            'sonarjs/regex-complexity': 'warn',
            'sonarjs/no-ignored-exceptions': 'off',
            'sonarjs/no-commented-code': 'warn',
            'sonarjs/no-unused-vars': 'warn',
            'sonarjs/prefer-single-boolean-return': 'warn',
            'sonarjs/duplicates-in-character-class': 'off',
            'sonarjs/single-char-in-character-classes': 'off',
            'sonarjs/anchor-precedence': 'warn',
            'sonarjs/updated-loop-counter': 'off',
            'sonarjs/no-dead-store': 'warn',
            'sonarjs/no-duplicated-branches': 'warn',
            'sonarjs/max-lines': 'warn', // max 1000 lines
            'sonarjs/no-variable-usage-before-declaration': 'error',
            'sonarjs/no-hardcoded-passwords': 'off',
            'sonarjs/no-hardcoded-secrets': 'off',
            'sonarjs/pseudo-random': 'off',
            'sonarjs/slow-regex': 'warn',
            'sonarjs/todo-tag': 'warn',
            'sonarjs/table-header': 'off',
        },
        plugins: {
            sonarjs: sonar,
            prettier: fixupPluginRules(prettier),
        },
    },
    {
        rules: {
            'antfu/consistent-list-newline': 'off',
            'node/prefer-global/process': 'off',
            'node/prefer-global/buffer': 'off',
            'node/no-callback-literal': 'off',
            'unicorn/prefer-number-properties': 'warn',
            'unicorn/no-new-array': 'warn',
            'style/indent': 'off',
        },
    },
    {
        files: GLOB_TESTS,
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.es2021,
                ...globals.node,
                ...globals.jest,
            },
        },
    },
)
