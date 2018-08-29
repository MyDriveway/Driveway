const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  // devtool: 'inline-source-map',
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
    // publicPath: 'build'
  },
  // Module loaders are pre hooks that transform the code before rendering it to the browser,
  // making it backwards compatable with older browsers. eg: babel transpiler for es6/es7 syntax
  module: {
    rules: [
      {
        test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  // Configurations for webpack-dev-server
  devServer: {
    port: 8080, // webpack-dev-server port to listen on
    open: true, // automatically open homepage on startup
    proxy: {
      '/': 'http://localhost:3000' // Express server to send API requests to
    }
  },
  // clean-webpack-plugin removes build folder(s) before building
  // html-webpack-plugin simplifies creation of HTML files for your bundle
  plugins: [
    new CleanWebpackPlugin(['build']),
    new HtmlWebpackPlugin({
      template: './client/static/index.html'
    })
  ]
};
