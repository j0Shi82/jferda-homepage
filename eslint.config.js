import babelParser from '@babel/eslint-parser'
import js from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import eslintPluginSvelte from 'eslint-plugin-svelte'
import globals from 'globals'
import svelteParser from 'svelte-eslint-parser'

export default [
  js.configs.recommended,
  ...eslintPluginSvelte.configs['flat/recommended'],
  stylistic.configs['recommended-flat'],
  {
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      'no-multiple-empty-lines': [
        'error',
        {
          max: 1,
          maxBOF: 2,
        },
      ],
    },
    ignores: ['node_modules/**', 'public/**'],
    languageOptions: {
      sourceType: 'module',
      //   allowImportExportEverywhere: true,
      globals: {
        ...globals.browser,
        ...globals.jest,
        ...globals.node,
        // ...globals.es6,
      },
      parser: babelParser,
    },
  },
  {
    files: ['src/**/*.svelte'],
    languageOptions: {
      parser: svelteParser,
    },
  },
]
