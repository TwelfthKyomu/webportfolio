import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettier from 'eslint-config-prettier/flat';

export default defineConfig([
    ...nextVitals,
    ...nextTs,
    prettier,
    {
        rules: {
            curly: ['error', 'multi-line', 'consistent'],
            eqeqeq: ['error', 'always'],
            'no-console': ['error', { allow: ['warn', 'error'] }],
            'no-restricted-syntax': [
                'error',
                {
                    selector: "TSAsExpression:not([typeAnnotation.typeName.name='const'])",
                    message: 'Без as: сужай тип через type guard или проверку.',
                },
            ],
            'padding-line-between-statements': [
                'warn',
                { blankLine: 'always', prev: '*', next: 'return' },
                { blankLine: 'always', prev: ['const', 'let'], next: '*' },
                { blankLine: 'any', prev: ['const', 'let'], next: ['const', 'let'] },
            ],
            '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
            '@typescript-eslint/consistent-type-imports': 'error',
            '@typescript-eslint/no-non-null-assertion': 'error',
            'import/no-cycle': 'error',
            'import/no-default-export': 'error',
            'import/order': [
                'error',
                {
                    groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                    'newlines-between': 'always',
                    alphabetize: { order: 'asc', caseInsensitive: true },
                },
            ],
            'react/function-component-definition': [
                'error',
                { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' },
            ],
            'react/jsx-curly-brace-presence': ['error', 'never'],
            'react/jsx-newline': ['error', { prevent: true }],
            'react/no-danger': 'error',
            'react/self-closing-comp': 'error',
        },
    },
    {
        files: ['src/app/**', '*.config.{ts,mjs}'],
        rules: {
            'import/no-default-export': 'off',
        },
    },
    {
        files: ['src/components/BeforePaintScript/index.tsx'],
        rules: {
            'react/no-danger': 'off',
        },
    },
    globalIgnores(['.next/**', 'next-env.d.ts']),
]);
