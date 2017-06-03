require('dotenv').config()

export default {
  name: "auth_servise",
  port: process.env.PORT || 3000,
  storage: "./db/database.dev.sqlite",
  env: process.env.NODE_ENV,

}
