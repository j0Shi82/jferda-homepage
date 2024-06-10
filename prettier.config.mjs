/** @type {import("prettier").Config} */
const config = {
  printWidth: 200,
  semi: false,
  singleQuote: true,
  plugins: ['prettier-plugin-svelte'],
  overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
}

export default config
