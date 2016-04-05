'use strict';

const path = require('path');
const express = require('express');
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpack = require("webpack");


const app = express();


const compiler = webpack(require('./frontend/webpack.config'));

app.use(webpackDevMiddleware(compiler, {
  //publicPath: '/',
}));


app.get('/', function (req, res, next) {
  res.sendFile(path.resolve(__dirname, 'frontend/index.html'));
});

app.listen(3000);
