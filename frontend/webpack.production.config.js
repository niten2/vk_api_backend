"use strict";

require('dotenv').config();

var _ = require('lodash');
var webpack = require('webpack');
var path = require('path');

// var ModernizrWebpackPlugin = require('modernizr-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');
var BundleHashWebpackPlugin = require('bundlehash-webpack-plugin');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');

var API_ROOT = process.env.API_ROOT || 'http://127.0.0.1:3000';
var ASSETS_HOST = process.env.ASSETS_HOST || 'http://127.0.0.1:8080';
var APP_TOKEN = process.env.APP_TOKEN || "";
var S3_BUCKET = process.env.S3_BUCKET || "";

var APPLICATION_ID = process.env.APPLICATION_ID || "";
var SECRET_KEY_ID = process.env.SECRET_KEY_ID || "";

console.log('PRODUCTION CONFIG');
// console.log('S3_BUCKET>', S3_BUCKET);
console.log('API_ROOT>', API_ROOT);
console.log('ASSETS_HOST>', ASSETS_HOST);
// console.log('APPLICATION_ID>', APPLICATION_ID)
// console.log('SECRET_KEY_ID>', SECRET_KEY_ID)

module.exports = {

    entry:  {
        app: './src/app'
    },

    output: {
        path: path.join(__dirname, 'dist'),
        // publicPath: './',
        publicPath: ASSETS_HOST,
        filename: 'js/[name].bundle.[hash].js'
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

        path.resolve(__dirname, 'src'),
        path.resolve(__dirname, 'src/_vendor'),
        path.resolve(__dirname, 'static', "images"),
      ],
      modulesDirectories: [
        'node_modules',
        'node_modules/blueimp-file-upload/js/vendor',
      ],
      extensions: ['', '.js', '.jsx', '.json', '.scss', '.css', ".sass"]
    },

    devtool: 'cheap-module-source-map',

    stats: {
      colors: true
    },


    module: {
      loaders: [
        // {
        //   test: /\.(jsx|js)?$/,
        //   loader: 'react-hot',
        //   include: path.join(__dirname, 'src')
        // },

        {
          test: /\.(jsx|js)?$/,
          loader: 'babel',
          // include: path.join(__dirname, 'src'),
          exclude: [/node_modules/, /jquery/, /\.min\./],
          query: {
            cacheDirectory: true,
            plugins: [
              'transform-decorators-legacy',
              'add-module-exports',
              'transform-runtime',
            ],
            presets: ['es2015', 'react', 'stage-1'],
          }
        },

        /* Styles */
        { // SCSS styles included in js
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract(
                'style',
                [
                    'css?module',
                    // 'resolve-url',
                    'sass?sourceMap'
                ].join('!'),
                { allChunks: true }
            ),
            include: [
                path.resolve(__dirname, "src")
            ]
        },
        { // SCSS styles
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract(
                'style',
                [
                    'css',
                    // 'resolve-url',
                    'sass?sourceMap'
                ].join('!'),
                { allChunks: true }
            ),
            include: [
                path.resolve(__dirname, "stylesheets")
            ]
        },
        {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract(
                'style',
                'css',
                { allChunks: true }
            )
        },

        {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: "file?name=[name].[ext]",
          // loader: "url-loader?limit=10000&mimetype=application/font-woff?name=css/[name].[ext]"
        },

        {
         test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
         // loader: "file-loader"
         loader: "file?name=css/[name].[ext]",
        },

        {
          test: /\.(png|jpg|jpeg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: "file?name=images/[name].[ext]"
        },

            // {
            //     test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            //     loader: "file?name=fonts/[name].[ext]"
            // },

            // {
            //     test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            //     loader: "file?name=fonts/[name].[ext]",
            //     include: [
            //         path.resolve(__dirname, "node_modules/font-awesome")
            //     ]
            // }


        // {
        //   test: /\.(png|jpg|jpeg|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        //   loader: "file?name=images/[name].[ext]"
        // },

        // {
        //   test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        //   loader: "file?name=fonts/[name].[ext]"
        // },

        // {
        //   test: /\.(ttf|eot|svg|woff(2))(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        //   loader: "file?name=fonts/[name].[ext]",
        //   include: [
        //     path.resolve(__dirname, "node_modules/font-awesome")
        //   ]
        // },

        // {
        //   test:   /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
        //   loader: 'file?name=[path][name].[ext]'
        // }


        // {
        //   test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        //   loader: "url-loader?limit=10000&mimetype=application/font-woff"
        // },

      ]
    },

    plugins: _.compact([
      new ProgressBarPlugin(),

      // new ExtractTextPlugin("css/[name].bundle.[hash].css", {
      //   allChunks: true
      // }),

      new ExtractTextPlugin("css/[name].bundle.[hash].css"),

      // new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),

      new webpack.DefinePlugin({
        "API_ROOT": JSON.stringify(API_ROOT),
        "APP_TOKEN":   JSON.stringify(APP_TOKEN),
        "ASSETS_HOST":   JSON.stringify(ASSETS_HOST),
        "APPLICATION_ID":   JSON.stringify(APPLICATION_ID),
        "SECRET_KEY_ID":   JSON.stringify(SECRET_KEY_ID),
        process: {
          env: {
            NODE_ENV: JSON.stringify(process.env.NODE_ENV)
          }
        }
      }),

      new BundleHashWebpackPlugin({
        file: {
          template: path.join(__dirname, 'static/index.html'),
          target: path.join(__dirname, 'dist/index.html'),
        }
      }),


      new CopyWebpackPlugin(_.compact([
        { from: 'static', to: '' },
        // SWAGGER_DOC_URL ? {
          // from: 'node_modules/swagger-ui/dist', to: 'api_docs'
        // } : null
      ]), {
        ignore: []
      }),

      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        },
        mangle: false,
        warnings: false,
        drop_console:true,
        sourceMap: true
      }),

      // new ModernizrWebpackPlugin({
      //     filename: './js/modernizr-bundle.js',
      //     'feature-detects': [ 'history', 'touchevents']
      // }),

      // ( SWAGGER_DOC_URL ? new FindAndReplaceInFilePlugin({
      //   encoding : 'utf8',
      //   file: path.join(__dirname, 'dist/api_docs/index.html'),
      //   regExp: /url = "http:\/\/.+"/,
      //   text: 'url = "' + SWAGGER_DOC_URL + '"'
      // }) : null),

      // new webpack.ProvidePlugin({
      //     "$" : "jquery",
      //     "jQuery" : "jquery",
      //     "window.jQuery" : "jquery",
      // }),
    ]),

}


function FindAndReplaceInFilePlugin (options) {
  var PLUGIN_NAME = 'FindAndReplaceInFilePlugin';

  var fs = require('fs');
  if (!options) options = {};

  options.encoding = options.encoding || 'utf8';

  return function () {
    this.plugin("done", function (stats) {
      console.log(PLUGIN_NAME, '... start');

      try {
        var html = fs.readFileSync(options.file, { encoding : options.encoding});
        console.log('Source file open:', options.file);
      } catch (e) {
        console.error(PLUGIN_NAME, 'ERROR', e);
        return;
      }

      html = html.replace(options.regExp, options.text);
      console.log(PLUGIN_NAME, '`'+options.regExp+'`', 'replaced to', '`'+options.text+'`');

      try {
        fs.writeFileSync(options.file, html, { encoding : options.encoding});
        console.log('Changes saved to:', options.file);
      } catch (e) {
        console.error(PLUGIN_NAME, 'ERROR', e);
        return;
      }

      console.log(PLUGIN_NAME, '... done');
    });
  }
}
