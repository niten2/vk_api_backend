const path = require('path')


// console.log("dsfsdfsdfds")
// console.log(path.resolve(__dirname, '..'))

require("babel-core/register")({

  sourceMaps: true,

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
    path.resolve(__dirname, "..")
    // path.resolve("..", __dirname, 'node_modules'),
    // path.resolve("..", __dirname, 'resourses'),
    // path.resolve("..", __dirname, 'models')
  )
})

