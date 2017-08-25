const path = require('path')

require("babel-core/register")({

  sourceMaps: true,

  extensions: [".jsx", ".js"],

  plugins: [
    "babel-polyfill",
    "transform-decorators-legacy"
  ],

  presets: [
    "es2015",
    "stage-3",
  ],

  resolveModuleSource: require('babel-resolver')(
    path.resolve(__dirname, "..")
  )

})

