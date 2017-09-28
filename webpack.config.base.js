'use strict';

const path = require('path');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

module.exports = {
  entry: [],
  output: {
    pathinfo: false,
    publicPath: '/'
  },
  resolve: {
    modules: [
      path.resolve('./src/'),
      'node_modules'
    ]
  },
  module: {
    rules: [
      {
        test: /\.(eot|ttf|woff|woff2)$/i,
        use: 'file-loader'
      },
      {
        test: /\.(mp4|ico)$/i,
        use: 'file-loader'
      },
      {
        test: /images\/ubnt-icons\/.+\.svg$/i,
        use: [{loader: 'url-loader'}]
      }
    ]
  },
  plugins: [
    new CaseSensitivePathsPlugin()
  ]
};
