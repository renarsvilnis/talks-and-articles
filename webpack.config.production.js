'use strict';

const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');

const ENV = process.env.ENV || 'local';

const pkg = require('./package.json');
const baseConfig = require('./webpack.config.base.js');

const config = webpackMerge(baseConfig, {
  devtool: 'source-map',
  // devtool: 'cheap-module-source-map',
  output: {
    path: path.join(__dirname, `dist`),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js'
  },
  entry: {
    bundle: [
      'babel-polyfill',
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
                importLoaders: 3,
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
            }
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
      __VERSION__: JSON.stringify(pkg.version)
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new ExtractTextPlugin({
      filename: '[name].[chunkhash].css',
      allChunks: true
    }),
    new webpack.optimize.UglifyJsPlugin({
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
    })
  ]
});

// Filter out RollbarSourceMapPlugin if not present
config.plugins = config.plugins.filter((f) => !!f);

module.exports = config;
