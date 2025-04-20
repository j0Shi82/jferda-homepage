const autoprefixer = require('autoprefixer')
const postcssDiscardDuplicates = require('postcss-discard-duplicates')

// https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env

const plugins = [
  autoprefixer(),
  postcssDiscardDuplicates,
]

module.exports = {
  plugins,
}
