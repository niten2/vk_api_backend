require('dotenv').config()

export default {
  name: "vk_api_backend_node",
  port: process.env.PORT || 3000,
  storage: "./db/database.dev.sqlite",
  env: process.env.NODE_ENV,
}
