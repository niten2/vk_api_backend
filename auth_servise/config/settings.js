require('dotenv').config()

export default {
  name: "auth_servise",
  port: process.env.PORT || 3000,
  storage: "./db/database.dev.sqlite",
  env: process.env.NODE_ENV,

  insta_access_token: process.env.INSTA_ACCESS_TOKEN,
  insta_client_id: process.env.INSTA_CLIENT_ID,
  insta_client_secret: process.env.INSTA_CLIENT_SECRET,
  insta_callback_url: process.env.INSTA_CALLBACK_URL,

}
