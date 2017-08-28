require('dotenv').config()

export default {
  name: "auth_servise",
  port: process.env.PORT || 3000,
  storage: "./db/database.dev.sqlite",
  env: process.env.NODE_ENV,

  jwt_secret_key: process.env.JWT_SECRET_KEY,

  crmUri: process.env.CRM_URI,
  vkUri: process.env.VK_URI,
  instaUri: process.env.INSTA_URI,
}
