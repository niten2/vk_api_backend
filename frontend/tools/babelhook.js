// require('babel-register')()
// require('babel-polyfill')()

var jsdom = require('jsdom').jsdom

var exposedProperties = ['window', 'navigator', 'document']

global.document = jsdom('')
global.window = document.defaultView
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property)
    global[property] = document.defaultView[property]
  }
})

global.navigator = {
  userAgent: 'node.js'
}

documentRef = document

const path = require('path')

require("babel-core/register")({
  extensions: [".jsx", ".js"],
  plugins: [
    "babel-polyfill",
    "babel-plugin-syntax-async-functions",
    'transform-decorators-legacy',
    'add-module-exports',
  ],
  presets: [
    "es2015",
    "stage-0",
    "react"
  ],
  resolveModuleSource: require('babel-resolver')(
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
    path.resolve(__dirname, 'static', "images")
  )
})


