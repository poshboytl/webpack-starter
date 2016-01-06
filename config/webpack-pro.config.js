var webpack = require('webpack')
var webpackConfig = require('./webpack.config.js')
var config = require('./config.js')

var path = require('path')
var _ = require('lodash')

var HtmlPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');

module.exports = _.merge(webpackConfig, {
  output: {
    path: config.DIST_PATH,
    filename: '[name]-bundle-[chunkhash].js',
    chunkFilename: '[id]-bundle-[chunkhash].js',
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.optimize.CommonsChunkPlugin('common', 'common-[chunkhash].js'),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new ChunkManifestPlugin({
      filename: 'webpack-common-manifest.json',
      manfiestVariable: 'webpackBundleManifest',
    }),
    new HtmlPlugin({
      title: 'Hello World app',
      template: path.resolve(config.TEM_PATH, 'index.html'),
      filename: 'index.html',
      chunks: ['common', 'vendors', 'index'],
      inject: 'body'
    }),
  ]
})
