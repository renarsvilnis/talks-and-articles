'use strict';

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackHotMiddleware = require('webpack-hot-middleware');

const config = require('./webpack.config.development');

// Config
const HOST = '0.0.0.0';
const PORT = process.env.PORT || 8080;

// Webpack instance
const compiler = webpack(config);

// Middlewares
const server = new WebpackDevServer(compiler, {
  noInfo: true,
  stats: {
    colors: true
  },
  compress: true,
  hot: true,
  historyApiFallback: true,
  disableHostCheck: true
});
const whm = webpackHotMiddleware(compiler);
server.use(whm);

server.listen(PORT, HOST, (err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.info(`🌎 Listening at http://${HOST}:${PORT}`);
});

process.on('SIGTERM', () => {
  console.info('🌎 Stopping dev server');

  server.close(() => {
    process.exit(0);
  });
});
