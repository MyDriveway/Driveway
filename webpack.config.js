const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: "build"
  },
  module: {
    rules: [
      {
        test: /jsx?|js?/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query:
        {
          presets:['react', 'es2015']
        }
      }
    ]
  },
  mode: "development"
}