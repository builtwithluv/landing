const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',

  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    './src/index.jsx',
  ],

  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },

      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },

      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader',
          options: {
            sourceMap: true
          }
        }, {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }]
      },

      {
        test: /\.svg$/,
        use: [{
          loader: 'babel-loader'
        }, {
          loader: 'svg-react-loader'
        }]
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(['build']),
    new HtmlWebpackPlugin({
      template: './src/index.ejs',
      inject: 'body',
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],

  resolve: {
    extensions: ['.js', '.jsx']
  },
};
