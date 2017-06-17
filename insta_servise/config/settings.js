require('dotenv').config()

export default {
  name: "insta_servise",
  port: process.env.PORT || 4005,
  storage: "./db/database.dev.sqlite",
  env: process.env.NODE_ENV,

  insta: {
    access_token: process.env.INSTA_ACCESS_TOKEN,
    client_id: process.env.INSTA_CLIENT_ID,
    client_secret: process.env.INSTA_CLIENT_SECRET,

    username: process.env.INSTA_USERNAME,
    password: process.env.INSTA_PASSWORD,
  }
}
