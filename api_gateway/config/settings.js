require('dotenv').config()

export default {
  name: "auth_servise",
  port: process.env.PORT || 3000,
  storage: "./db/database.dev.sqlite",
  env: process.env.NODE_ENV,

  jwt_secret_key: process.env.JWT_SECRET_KEY,
}
