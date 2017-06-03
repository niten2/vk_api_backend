require('dotenv').config()

export default {
  name: "insta_servise",
  port: process.env.PORT || 5000,
  storage: "./db/database.dev.sqlite",
  env: process.env.NODE_ENV,

  insta_access_token: process.env.INSTA_ACCESS_TOKEN,
  insta_client_id: process.env.INSTA_CLIENT_ID,
  insta_client_secret: process.env.INSTA_CLIENT_SECRET,

}
