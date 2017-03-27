// import dotenv from 'dotenv'
// import uriUtil from 'mongodb-uri'

// global.__DEV__ = true
// global.__PROD__ = false

// let dotenvFilename
// let DB_URL

// if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
// 	dotenvFilename = '.env'
// } else {
// 	dotenvFilename = `.env.${process.env.NODE_ENV}`
// }

// dotenv.config({
//   silent: true,
//   path: dotenvFilename
// })

// // for heroku https://github.com/mongolab/mongodb-driver-examples/blob/master/nodejs/mongooseSimpleExample.js
// if (process.env.NODE_ENV == 'production') {
// 	DB_URL = uriUtil.formatMongoose(process.env.MONGOLAB_URI)
// } else {
// 	DB_URL = process.env.DB_URL
// }

// export default {
// 	// admin_login: process.env.ADMIN_LOGIN,
// 	// admin_password: process.env.ADMIN_PASSWORD,
//   name: 'Backend blog nodejs',

//   port: process.env.PORT || 3000,

//   db: {
//     url: DB_URL,
//   },

//   jwt: {
//     secret: process.env.SECRET_KEY,
//   },

// }

