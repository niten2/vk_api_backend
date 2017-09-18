import dotenv from 'dotenv'

let path

if (process.env.NODE_ENV == "test") {
  path = `.env.${process.env.NODE_ENV}`
} else {
  path = ".env"
}

dotenv.config({ path })

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
