const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const WebpackModuleNomodulePlugin = require('webpack-module-nomodule-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')
const RobotstxtPlugin = require('robotstxt-webpack-plugin')
const Visualizer = require('webpack-visualizer-plugin2')
const webpack = require('webpack')

const path = require('path')

const sveltePreprocess = require('svelte-preprocess')

const mode = process.env.NODE_ENV || 'development'
const target = process.env.TARGET || 'modern'
const isProd = mode === 'production'
const baseURL = isProd ? 'https://j0shi.dev' : 'http://localhost:8080'

module.exports = {
  entry: {
    bundle: [`./src/main_${target}.js`],
  },
  devServer: {
    host: '0.0.0.0',
    port: 8090,
    hot: true,
    static: [path.join(__dirname, 'dist'), path.join(__dirname, 'public')],
    client: {
      overlay: {
        warnings: false,
        errors: true,
        runtimeErrors: true,
      },
    },
  },
  resolve: {
    alias: {
      'svelte': path.resolve('node_modules', 'svelte/src/runtime'),
      // workaround for weird error Module not found: Error: Package path . is not exported from package
      'regexparam': path.resolve('node_modules', 'regexparam', 'dist', 'index.mjs'),
      'svelte-spa-router/wrap': path.resolve('node_modules', 'svelte-spa-router/wrap.js'),
    },
    extensions: ['.cjs', '.mjs', '.js', '.svelte'],
    mainFields: ['svelte', 'browser', 'module', 'main'],
    modules: ['src', 'node_modules'],
    conditionNames: ['svelte', 'require', 'node', 'browser'],
  },
  output: {
    path: `${__dirname}/dist`,
    filename: `[name].[contenthash].${target}.js`,
    chunkFilename: `[name].[chunkhash].[contenthash].${target}.js`,
  },
  module: {
    rules: [
      {
        test: /\.(cjs|js|mjs|svelte)$/,
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
            emitCss: isProd,
            hotReload: !isProd,
            preprocess: sveltePreprocess({
              postcss: true,
            }),
            compilerOptions: {
              dev: !isProd,
            },
          },
        },
      },
      {
        test: /node_modules\/svelte\/.*\.mjs$/,
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(png|jpe?g|gif|mp4|ttf|webp)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(svg)$/,
        type: 'asset/inline',
      },
      // {
      //   test: /\.(pdf)$/,
      //   loader: 'file-loader',
      // },
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

              sassOptions: {
                loadPaths: ['./src/assets/style', './node_modules'],
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
      filename: `[name].[contenthash].${target}.css`,
    }),
    new HtmlWebpackPlugin({
      title: '>_ j0Shi.dev --help',
      template: './src/index.template.html',
      inject: 'body',
    }),
    new RobotstxtPlugin({
      policy: [
        {
          userAgent: '*',
          allow: '/',
        },
      ],
      sitemap: `${baseURL}/sitemap.xml`,
      host: baseURL,
    }),
    new Visualizer(),
    new webpack.DefinePlugin({
      'process.env.BASEURL': JSON.stringify(baseURL),
    }),
    isProd
      ? new WorkboxPlugin.GenerateSW({
        clientsClaim: true,
        skipWaiting: true,
        exclude: [/legacy/],
      })
      : () => {},
    isProd ? new WebpackModuleNomodulePlugin(target, 'minimal') : () => {},
    new CopyPlugin({
      patterns: [{ from: path.resolve(__dirname, 'public'), to: path.resolve(__dirname, 'dist') }],
    }),
  ],
  devtool: isProd ? false : 'source-map',
  target: 'web',
}
