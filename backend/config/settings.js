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
  name: "api_gateway",
  env: process.env.NODE_ENV,
  isEnvTest: process.env.NODE_ENV == "test",
  storage: `./db/database.${process.env.NODE_ENV}.sqlite`,
  port: process.env.PORT || 3000,
  jwt_secret_key: process.env.JWT_SECRET_KEY,
  crmUri: process.env.CRM_URI,
  vkUri: process.env.VK_URI,
  instaUri: process.env.INSTA_URI,
}
