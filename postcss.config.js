/* eslint-disable import/no-extraneous-dependencies */
const autoprefixer = require('autoprefixer');
const postcssDiscardDuplicates = require('postcss-discard-duplicates');
const purgecss = require('@fullhuman/postcss-purgecss');

const plugins = [
  purgecss({
    content: [
      './src/**/*.html',
      './src/**/*.svelte',
      './src/**/*.js',
      './node_modules/@smui/**/*.svelte',
      './node_modules/@smui/**/*.js',
      './node_modules/@material/**/*.js',
    ],
  }),
  autoprefixer(),
  postcssDiscardDuplicates,
];

module.exports = {
  plugins,
};
