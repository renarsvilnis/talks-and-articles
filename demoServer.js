'use strict';

const express = require('express');
const path = require('path');
const compression = require('compression');

// Config
const HOST = '0.0.0.0';
const PORT = process.env.PORT || 8080;

const app = express();

app.use(compression());
app.use(express.static('dist'));
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(PORT, HOST, (err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.info(`🌎 Listening at http://${HOST}:${PORT}`);
});
