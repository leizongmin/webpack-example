'use strict';

/**
 * Webpack Example
 *
 * @author Zongmin Lei <leizongmin@gmail.com>
 */

const path = require('path');
const express = require('express');

const app = express();

app.get('/', function (req, res, next) {
  console.log('GET /');
  res.sendFile(path.resolve(__dirname, 'frontend/index.html'));
});

app.listen(3001);
