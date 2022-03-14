const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const WebpackModuleNomodulePlugin = require('webpack-module-nomodule-plugin');

const path = require('path');

const sveltePreprocess = require('svelte-preprocess');

const mode = process.env.NODE_ENV || 'development';
const target = process.env.TARGET || 'modern';
const isProd = mode === 'production';

module.exports = {
  entry: {
    bundle: ['./src/main.js'],
  },
  devServer: {
    host: '0.0.0.0',
    contentBase: [path.join(__dirname, 'dist'), path.join(__dirname, 'public')],
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
    path: `${__dirname}/dist`,
    filename: `[name].[contenthash].${target}.js`,
    chunkFilename: `[name].[chunkhash].[contenthash].${target}.js`,
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
            emitCss: false,
            hotReload: true,
            preprocess: sveltePreprocess({
              postcss: true,
            }),
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|mp4|svg|ttf|webp)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          isProd ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              webpackImporter: false,
              // eslint-disable-next-line global-require
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
      filename: '[name].[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      title: '>_ j0Shi.dev --help',
      template: './src/index.template.html',
      inject: 'body',
    }),
    isProd ? new WebpackModuleNomodulePlugin(target, 'minimal') : () => {},
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'public'), to: path.resolve(__dirname, 'dist') },
      ],
    }),
  ],
  devtool: isProd ? false : 'source-map',
  target: 'web',
};
