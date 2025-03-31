import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import sonarjs from 'eslint-plugin-sonarjs';
import prettierPlugin from 'eslint-plugin-prettier';
import jest from 'eslint-plugin-jest';

const tsconfigPath = './tsconfig.json';

export default [
  {
    ignores: ['**/*.d.ts', 'vite.config.ts', 'jest.config.ts'],
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: tsconfigPath,
        sourceType: 'module',
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true }
      },
      globals: {
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        fetch: 'readonly',
        Headers: 'readonly',
        Request: 'readonly',
        Response: 'readonly'
      }
    },
    settings: {
      react: { version: 'detect' },
      jest: { version: 'detect' },
      'import/resolver': {
        typescript: { alwaysTryTypes: true }
      }
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      import: importPlugin,
      'jsx-a11y': jsxA11y,
      sonarjs,
      prettier: prettierPlugin,
      '@typescript-eslint': tseslint.plugin,
      jest
    },
    rules: {
      'prettier/prettier': ['error', {
        endOfLine: 'auto',
        singleQuote: true,
        trailingComma: 'none',
        arrowParens: 'avoid',
        bracketSpacing: false,
        semi: true
      }],
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'no-alert': 'error',
      'no-template-curly-in-string': 'error',
      'require-unicode-regexp': 'error',
      'prefer-template': 'warn',
      'no-implicit-coercion': 'warn',
      'require-await': 'warn',
      'no-plusplus': ['warn', { allowForLoopAfterthoughts: true }],
      curly: 'warn',
      'object-shorthand': 'warn',

      'react/react-in-jsx-scope': 'off',
      'react/jsx-key': ['error', {
        checkFragmentShorthand: true,
        checkKeyMustBeforeSpread: true,
        warnOnDuplicates: true
      }],
      'react/function-component-definition': ['warn', { namedComponents: 'arrow-function' }],
      'react/jsx-no-leaked-render': ['error', { validStrategies: ['ternary'] }],
      'react/destructuring-assignment': ['error', 'always', { destructureInSignature: 'always' }],
      'react/jsx-sort-props': 'warn',
      'react/self-closing-comp': 'warn',
      'react/display-name': 'warn',

      'import/order': ['error', {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index'], 'type', 'object'],
        pathGroups: [{ pattern: 'react+(|-native)', group: 'external', position: 'before' }],
        pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true }
      }],
      'import/no-duplicates': 'error',
      'import/newline-after-import': 'error',
      'import/no-default-export': 'error',
      'import/no-cycle': 'warn',
      'import/no-extraneous-dependencies': ['error', {
        devDependencies: ['**/*.{test,spec,story,stories}.{ts,tsx}']
      }],

      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unnecessary-type-assertion': 'error',
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/prefer-nullish-coalescing': 'error',
      '@typescript-eslint/prefer-ts-expect-error': 'error',
      '@typescript-eslint/restrict-template-expressions': 'error',
      '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/no-unused-expressions': ['error', {
        allowShortCircuit: true,
        allowTernary: true,
        enforceForJSX: true
      }],
      '@typescript-eslint/no-floating-promises': ['error', {
        ignoreVoid: true,
        ignoreIIFE: true
      }],
      '@typescript-eslint/no-misused-promises': ['error', {
        checksVoidReturn: {
          arguments: false,
          attributes: false
        }
      }],
      '@typescript-eslint/no-unnecessary-type-arguments': 'warn',
      '@typescript-eslint/no-unnecessary-condition': 'warn',
      '@typescript-eslint/no-unused-vars': ['error', {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_'
      }],
      '@typescript-eslint/switch-exhaustiveness-check': 'warn',
      '@typescript-eslint/naming-convention': ['warn',
        { selector: 'default', format: ['camelCase'], leadingUnderscore: 'allow' },
        { selector: 'variable', format: ['PascalCase', 'camelCase', 'UPPER_CASE'], leadingUnderscore: 'allow' },
        { selector: 'parameter', format: ['camelCase', 'PascalCase'], leadingUnderscore: 'allow' },
        { selector: 'property', format: null, leadingUnderscore: 'allow' },
        { selector: 'typeLike', format: ['PascalCase'] },
        { selector: 'import', format: null }
      ]
    }
  }
];
