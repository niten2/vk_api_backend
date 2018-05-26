import dotenv from 'dotenv'

const getPath = () => {
  if (process.env.NODE_ENV == "development.job") {
    console.log(111)
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
  env: process.env.NODE_ENV,
  port: process.env.PORT || 3000,

  jwt_secret_key: process.env.JWT_SECRET_KEY,
  databaseUrl: process.env.DATABASE_URL,

  isEnvTest: process.env.NODE_ENV == "test",
}
