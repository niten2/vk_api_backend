require('dotenv').config()

export default {
  name: "crm servise",
  port: process.env.PORT || 3000,
  storage: "./db/database.dev.sqlite",
  env: process.env.NODE_ENV,

}
