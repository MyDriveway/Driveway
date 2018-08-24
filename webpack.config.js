const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  entry: './app/index.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /jsx?|js?/,
        exclude: /node_modules/,
        loader: "babel-loader",
        include: path.join(__dirname, 'app'),
        query:
        {
          presets:['react', 'es2015']
        }
      }
    ]
  },
  mode: "development",
}