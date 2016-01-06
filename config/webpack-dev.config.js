var webpack = require('webpack')
var webpackConfig = require('./webpack.config.js')

var path = require('path')
var _ = require('lodash')

var config = require('./config.js')
var HtmlPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = _.merge(webpackConfig, {
  debug: true,
  displayErrorDetails: true,
  outputPathinfo: true,
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },
  preLoaders: [
    {
      test: /\.jsx?$/,
      loader: 'eslint-loader',
      exclude: /(node_modules|bower_components)/
    }
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('[name].css'),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new HtmlPlugin({
      title: 'Hello World app',
      template: path.resolve(config.TEM_PATH, 'index.html'),
      filename: 'index.html',
      chunks: ['vendors', 'index'],
      inject: 'body'
    }),
  ]
})
