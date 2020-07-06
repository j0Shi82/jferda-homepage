const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Visualizer = require('webpack-visualizer-plugin');

const path = require('path');

const sveltePreprocess = require('svelte-preprocess');

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

module.exports = {
  entry: {
    bundle: ['./src/main.js'],
  },
  devServer: {
    host: '0.0.0.0',
  },
  resolve: {
    alias: {
      svelte: path.resolve('node_modules', 'svelte'),
    },
    extensions: ['.mjs', '.js', '.svelte'],
    mainFields: ['svelte', 'browser', 'module', 'main'],
    modules: ['src', 'node_modules'],
  },
  output: {
    path: `${__dirname}/public`,
    filename: '[name].[contenthash:8].js',
    chunkFilename: '[name].[id].[contenthash:8].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|mjs|svelte)$/,
        exclude: /node_modules\/(?!svelte)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.svelte$/,
        use: {
          loader: 'svelte-loader',
          options: {
            emitCss: true,
            hotReload: true,
            preprocess: sveltePreprocess({
              postcss: true,
            }),
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|mp4|svg|ttf)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          prod ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              webpackImporter: false,
              implementation: require('sass'),
              sassOptions: {
                includePaths: [
                  './src/assets/style',
                  './node_modules',
                ],
              },
            },
          },
        ],
      },
    ],
  },
  mode,
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new Visualizer({
      filename: './statistics.html',
    }),
  ],
  devtool: prod ? 'source-map' : 'source-map',
  target: 'web',
};
