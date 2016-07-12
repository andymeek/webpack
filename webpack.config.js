/**
 * Created by negin.basiri on 12/07/2016.
 */
const webpack = require('webpack');
const ModernizrWebpackPlugin = require('modernizr-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
  context: __dirname,
  entry: {
    vendor: [
      "jquery"
    ],
    app: __dirname + "/src/app.js"
  },
  output: {
    path: __dirname + "/dist",
    publicPath: __dirname,
    filename: "[name].js",
    chunkFilename: "[name].css"
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery"
    }),
    new ModernizrWebpackPlugin({
      filename: 'modernizr.js',
      options: [
        'mq'
      ],
      'feature-detects': [
        'touchevents',
        'css/mediaqueries'
      ]
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      file: 'vendor.js'
    }),
    new ExtractTextPlugin("accStyle.css",{
      allChunks: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        exclude: /(node_modules)/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass")
      }
    ]
  },
  node: {
    fs: "empty"
  },
  devtool: "#inline-source-map",
  devServer: {
    hot: true,
    port: 8080
  }
};
