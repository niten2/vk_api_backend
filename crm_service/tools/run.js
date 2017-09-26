require('babel-register')

const app = require("../config/app").default
const listen = require("../config/app").listen

listen(app)
