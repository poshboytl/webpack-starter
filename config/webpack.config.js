var webpack = require('webpack')
var path = require('path')

var config = require('./config.js')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  context: config.SRC_PATH + '/scripts',
  entry: {
    index: './index.js',
    vendors: ['jquery']
  },
  output: {
    path: config.DIST_PATH,
    filename: '[name].bundle.js',
    chunkFilename: '[id].bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.json', '.coffee']
  },
  module: {
    loaders: [
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('css!autoprefixer!sass') },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('css!autoprefixer') },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'image?{ progressive: true, optimizationLevel: 3, pngquant: { quality: "65-80" } }',
            'url?limit=10000&name=images/[hash:8].[name].[ext]',
        ]
      },
      {
        test: /\.(woff|eot|ttf)$/i,
        loader: 'url?limit=10000&name=fonts/[hash:8].[name].[ext]'
      },
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
  ]
}
