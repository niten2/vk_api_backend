import dotenv from 'dotenv'

const getPath = () => {
  if (process.env.NODE_ENV == "development.job") {
    return ".env"
  }

  if (process.env.NODE_ENV == "production.job") {
    return ".env.production"
  }

  if (process.env.NODE_ENV == "development" || !process.env.NODE_ENV) {
    return ".env"
  }

  return `.env.${process.env.NODE_ENV}`
}

const checkRequiredEnv = (envs) => {
  envs.map((env) => { if (!process.env[env]) {
      throw new Error(`process.env.${env} should be exist`)
    }
  })
}

dotenv.config({ path: getPath() })

checkRequiredEnv([
  "DATABASE_URL",
  "JWT_SECRET_KEY",
])

export default {
  name: process.env.APP_NAME || "smm_system",
  env: process.env.NODE_ENV,
  port: process.env.PORT || 3000,

  isEnvTest: process.env.NODE_ENV == "test",

  jwt_secret_key: process.env.JWT_SECRET_KEY,
  databaseUrl: process.env.DATABASE_URL,
  redisUrl: process.env.REDIS_URL || "redis://127.0.0.1:6379",
}
