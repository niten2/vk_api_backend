const path = require('path')

require("babel-core/register")({
  extensions: [".jsx", ".js"],
  plugins: [
    "babel-polyfill",
    "babel-plugin-syntax-async-functions",
  ],
  presets: [
    "es2015",
    "stage-0",
  ],
  resolveModuleSource: require('babel-resolver')(
    path.resolve(__dirname),
    path.resolve(__dirname, 'node_modules'),
    path.resolve(__dirname, 'resourses'),
    path.resolve(__dirname, 'models')
  )
})

