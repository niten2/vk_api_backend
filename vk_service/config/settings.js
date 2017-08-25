require('dotenv').config()

export default {
  name: "vk_service",
  port: process.env.PORT || 3000,
  storage: "./db/database.dev.sqlite",
  env: process.env.NODE_ENV,

  vkAppId: process.env.VK_APP_ID,
  vkAppSecret: process.env.VK_APP_SECRET,
  vkToken: process.env.VK_TOKEN,

  jwt_secret_key: process.env.JWT_SECRET_KEY,
}
