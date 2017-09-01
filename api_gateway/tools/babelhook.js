const path = require('path')

require("babel-core/register")({

  sourceMaps: true,

  extensions: [".js"],

  plugins: [
    "babel-polyfill",
  ],

  presets: [
    "es2015",
    "stage-3",
  ],

  resolveModuleSource: require('babel-resolver')(
    path.resolve(__dirname, "..")
  )
})

