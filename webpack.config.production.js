'use strict';

const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const RollbarSourceMapPlugin = require('rollbar-sourcemap-webpack-plugin');
// const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin');
// const WebpackChunkHash = require('webpack-chunk-hash');
// const StatsPlugin = require('stats-webpack-plugin');

const ENV = process.env.ENV || 'local';

const pkg = require('./package.json');
const baseConfig = require('./webpack.config.base.js');

const publicPath = (() => {
  const baseUrl = 'controller.amplifi.com';
  switch (ENV) {
    case 'dev':
      return `https://dev-${baseUrl}`;
    case 'stg':
      return `https://stg-${baseUrl}`;
    case 'prd':
      return `https://${baseUrl}`;
    default:
      return 'http://local.amplifi.com:8080';
  }
})();

const config = webpackMerge(baseConfig, {
  devtool: 'source-map',
  // devtool: 'cheap-module-source-map',
  // profile: false,
  output: {
    path: path.join(__dirname, `dist`),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js'
  },
  entry: {
    // bundle: [
    //   path.join(__dirname, 'src/index.js')
    // ],
    // vendor: [
    //   'babel-polyfill',
    //   'whatwg-fetch',
    //   'react',
    //   'react-dom',
    //   'redux',
    //   'react-redux'
    // ]
    bundle: [
      'babel-polyfill',
      'whatwg-fetch',
      path.join(__dirname, 'src/index.js')
    ]
  },
  module: {
    rules: [
      // JavaScript
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: [
          {'loader': 'babel-loader'},
          {
            loader: 'eslint-loader',
            options: {
              quite: false,
              failOnWarning: true,
              failOnError: true
            }
          }
        ]
      },
      // CSS
      {
        test: /\.(scss)$/i,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 4,
                minimize: true,
                sourceMap: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                plugins: () => [
                  require('autoprefixer')({
                    browsers: ['> 1%', 'last 2 versions', 'Firefox ESR'],
                    cascade: true,
                    remove: true
                  }),
                  require('css-mqpacker')()
                ]
              }
            },
            {
              loader: 'resolve-url-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            },
            {loader: 'stylefmt-loader'}
          ]
        })
      },
      // Images
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'file-loader'
          },
          {
            loader: 'image-webpack-loader',
            query: {
              bypassOnDebug: false
            }
          }
        ]
      },
      {
        test: /\.(svg)$/i,
        use: [
          {
            loader: 'file-loader'
          },
          {
            loader: 'image-webpack-loader',
            query: {
              bypassOnDebug: false
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.ENV': JSON.stringify(ENV),
      __VERSION__: JSON.stringify(pkg.version),
      __LANG__: JSON.stringify('en'),
      __ROLLBAR_ACCESS_TOKEN__: JSON.stringify(process.env.ROLLBAR_CLIENT_ACCESS_TOKEN),
      __GIT_SHA__: JSON.stringify(process.env.GIT_SHA_SHORT)
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: ['vendor', 'manifest'],
    //   minChunks: 15
    // }),
    // new WebpackChunkHash(),
    new StyleLintPlugin({
      // fix: false
    }),
    new ExtractTextPlugin({
      filename: '[name].[chunkhash].css',
      allChunks: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      // comments: false,
      sourceMap: true,
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true
      },
      output: {
        comments: false
      }
    }),
    new webpack.HashedModuleIdsPlugin(),
    // new InlineManifestWebpackPlugin({
    //   name: 'webpackManifest'
    // }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      hash: false, // We do it manually
      minify: {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        minifyJS: true,
        minifyCSS: true
      }
    }),
    new PreloadWebpackPlugin({
      rel: 'prefetch'
    }),
    process.env.ROLLBAR_SERVER_ACCESS_TOKEN && new RollbarSourceMapPlugin({
      accessToken: process.env.ROLLBAR_SERVER_ACCESS_TOKEN,
      version: pkg.version,
      publicPath: publicPath
    })
    // new StatsPlugin('webpack.stats.json')
  ]
});

// Filter out RollbarSourceMapPlugin if not present
config.plugins = config.plugins.filter((f) => !!f);

module.exports = config;
