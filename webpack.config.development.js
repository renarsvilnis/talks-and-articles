'use strict';

const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const pkg = require('./package.json');
const baseConfig = require('./webpack.config.base.js');

module.exports = webpackMerge(baseConfig, {
  devtool: 'source-map',
  bail: false,
  output: {
    path: path.join(__dirname, `dist`),
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js'
  },
  entry: {
    bundle: [
      'babel-polyfill',
      'whatwg-fetch',
      'react-hot-loader/patch',
      path.join(__dirname, 'src/index.js'),
      `webpack-hot-middleware/client?dynamicPublicPath=true&reload=true&path=__webpack_hmr`
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: [
          {'loader': 'babel-loader'},
          {
            loader: 'eslint-loader',
            options: {
              quite: false, // NOTE: true before
              failOnWarning: true,
              failOnError: true
            }
          }
        ]
      },
      {
        test: /\.(scss)$/i,
        use: [
          {'loader': 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              importLoaders: 4,
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
          {loader: 'resolve-url-loader'},
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          },
          {loader: 'stylefmt-loader'}
        ]
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      },
      {
        test: /\.(svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {limit: 10000}
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      'process.env.ENV': JSON.stringify(process.env.ENV) || null,
      // process: {
      //   env: {
      //     NODE_ENV: JSON.stringify('development'),
      //     ENV: JSON.stringify(process.env.ENV || 'local')
      //   }
      // },
      __VERSION__: JSON.stringify(pkg.version),
      __LANG__: JSON.stringify('en'),
      __ROLLBAR_ACCESS_TOKEN__: JSON.stringify('NO_ROLLBAR_ACCESS'),
      __GIT_SHA__: JSON.stringify(process.env.GIT_SHA_SHORT)
    }),
    new StyleLintPlugin({
      // fix: false
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      hash: false, // We do it manually
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        useShortDoctype: true,
        minifyJS: true,
        minifyCSS: true
      }
    })
  ]
});
