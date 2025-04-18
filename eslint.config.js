import babelParser from '@babel/eslint-parser'
import stylistic from '@stylistic/eslint-plugin'
import sveltePlugin from 'eslint-plugin-svelte'
import globals from 'globals'
import svelteParser from 'svelte-eslint-parser'

export default [
	{
		languageOptions: {
			parser: babelParser,
			parserOptions: {
				sourceType: 'module',
				allowImportExportEverywhere: true,
			},
			globals: {
				...globals.browser,
				...globals.jest,
				...globals.es2015,
			},
		},
		settings: {
			'svelte3/ignore-styles': () => true,
			'import/core-modules': ['svelte'],
			'import/resolver': {
				node: {
					paths: ['src'],
				},
			},
		},
	},
	...sveltePlugin.configs['flat/recommended'],
	{
		files: ['**/*.svelte'],
		languageOptions: {
			parser: svelteParser,
			globals: {
				...globals.browser,
				...globals.jest,
				...globals.es2015,
			},
		},
		plugins: {
			'@stylistic': stylistic,
		},
		rules: {
			'import/first': 'off',
			'import/no-duplicates': 'off',
			'import/no-unresolved': 'off',
			'import/prefer-default-export': 'off',
			'import/no-mutable-exports': 'off',
			'no-multiple-empty-lines': [
				'error',
				{
					max: 1,
					maxBOF: 2,
				},
			],
		},
	},
]
