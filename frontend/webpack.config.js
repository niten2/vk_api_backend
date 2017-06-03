"use strict"

require('dotenv').config()
// require("babel-polyfill")

var _ = require('lodash')
var webpack = require('webpack')
var path = require('path')

var ProgressBarPlugin = require('progress-bar-webpack-plugin')
var LiveReloadPlugin = require('webpack-livereload-plugin')
var autoprefixer = require('autoprefixer')

var API_ROOT = process.env.API_ROOT || 'http://127.0.0.1:3000'
var ASSETS_HOST = 'http://127.0.0.1:8080/'
// var APP_TOKEN = process.env.APP_TOKEN || ""
// var APPLICATION_ID = process.env.APPLICATION_ID || ""
// var SECRET_KEY_ID = process.env.SECRET_KEY_ID || ""

module.exports = {

  devServer: {
    historyApiFallback: '/index.html',
    publicPath: '/',
    contentBase: path.resolve(__dirname, 'static'),
    hot: true
  },

  devtool: 'eval-source-map',
  // devtool: 'source-map',

  entry: {
    app: [
      'babel-polyfill',
      'webpack-dev-server/client?' + ASSETS_HOST,
      'webpack/hot/dev-server',
      './src/app'
    ],
  },

  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'js/[name].bundle.js'
  },

  resolve: {
    root: [
      path.resolve(__dirname, 'node_modules'),
      path.resolve(__dirname, 'node_modules', "react-bootstrap", "dist"),
      path.resolve(__dirname, "src"),
      path.resolve(__dirname, 'src/_vendor'),
      path.resolve(__dirname, 'src', "assets"),
      path.resolve(__dirname, 'src', "lib"),
      path.resolve(__dirname, 'src', "models"),
      path.resolve(__dirname, 'src', "stores"),
      path.resolve(__dirname, 'src', "views"),
      path.resolve(__dirname, 'src', "views", "shared"),
      path.resolve(__dirname, 'static', "images"),
    ],
    modulesDirectories: [
      'node_modules',
      'node_modules/blueimp-file-upload/js/vendor',
    ],
    extensions: [
      '',
      ".html",
      '.js', '.jsx', ".json",
      ".css", ".sass", ".scss",
      ".jpeg", ".png", ".gif", ".jpg",
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new LiveReloadPlugin(),
    new ProgressBarPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),

    new webpack.DefinePlugin({
      "API_ROOT": JSON.stringify(API_ROOT),
      "ASSETS_HOST": JSON.stringify(ASSETS_HOST),
      process: {
        env: {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV)
        }
      }
    }),

    // new ExtractTextPlugin("styles.css", { allChunks: true })
    // new webpack.ProvidePlugin({
    //     "$" : "jquery",
    //     "jQuery" : "jquery",
    //     "window.jQuery" : "jquery",
    // }),
  ],

  stats: {
      colors: true
  },

  module: {
    preLoaders: [
      {
        test: /\.(jsx|js)?$/,
        loaders: ['eslint'],
      },
    ],

    loaders: [
      {
        test: /\.(jsx|js)?$/,
        loader: 'react-hot',
        include: path.join(__dirname, 'src')
      },

      // JavaScript
      {
          test: /\.jsx$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            cacheDirectory: true,
            plugins: [
              'transform-decorators-legacy',
              'add-module-exports',
              "babel-plugin-syntax-async-functions",
              ["react-transform", {
                transforms: [
                  {
                    transform: 'react-transform-hmr',
                    imports: ['react'],
                    locals: ['module']
                  }
                ]
              }]
            ],

            presets: [
              'es2015',
              'stage-0',
              'react'
            ]
          }
      },

      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [/node_modules/, /jquery/, /\.min\./],
        query: {
          cacheDirectory: true,
          plugins: [
            'transform-decorators-legacy',
            'add-module-exports',
            "babel-plugin-syntax-async-functions",
          ],
          presets: [
            'es2015',
            'stage-0',
            'react',
          ]
        }
      },

      // Styles
      { // SCSS styles included in js
        test: /\.scss$/,
        loaders: [
          'style',
          'css?module&localIdentName=[name]__[local]___[hash:base64:5]',
          // 'resolve-url',
          'sass?sourceMap'
        ],
        include: [
          path.resolve(__dirname, "src")
        ]
      },

      { // SCSS styles
        test: /\.scss$/,
        loaders: [
          'style',
          'css',
          'sass?sourceMap'
        ],
      },

      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },

      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },

      {
       test: /\.(jpg|jpeg|png|ttf|eot|svg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
       loader: "file-loader"
     },
    ]
  },

}
