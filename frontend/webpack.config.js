'use strict';

/**
 * Webpack Example
 *
 * @author Zongmin Lei <leizongmin@gmail.com>
 */

const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    test: [
      'webpack-dev-server/client?http://0.0.0.0:3000',
      'webpack/hot/only-dev-server',
      path.resolve(__dirname, './test.js'),
    ],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
    publicPath: '/webpack',
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.(woff|woff2)$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.ttf$/, loader: 'file-loader' },
      { test: /\.eot$/, loader: 'file-loader' },
      { test: /\.svg$/, loader: 'file-loader' },
      {
        test: /\/bootstrap\/js\//,
        loader: 'imports?jQuery=jquery'
      },
      {
        loaders: ['react-hot', 'babel'],
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: __dirname,
    port: 3000,
    inline: true,
    historyApiFallback: true,
    stats: { colors: true },
    hot: true,
    proxy: {
      '*': 'http://127.0.0.1:3001',
    }
  },
  babel: {
    plugins: ['transform-runtime'],
    presets: ['es2015', 'stage-0', 'react'],
  },
};
