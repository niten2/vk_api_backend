import dotenv from 'dotenv'

const getPath = () => {
  if (process.env.NODE_ENV == "test") {
    return `.env.${process.env.NODE_ENV}`
  } else {
    return ".env"
  }
}

dotenv.config({ path: getPath() })

export default {
  name: "vk_service",
  storage: `./db/database.${process.env.NODE_ENV}.sqlite`,
  env: process.env.NODE_ENV,
  isEnvTest: process.env.NODE_ENV == "test",
  port: process.env.PORT || 3000,
  vkAppId: process.env.VK_APP_ID,
  vkAppSecret: process.env.VK_APP_SECRET,
  vkToken: process.env.VK_TOKEN,
}
