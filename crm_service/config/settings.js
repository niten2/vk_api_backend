if (process.env.NODE_ENV == "test") {
  require('dotenv').config({ path: ".env.sample" })
} else {
  require('dotenv').config()
}

const getStorage = () => {
  if (process.env.NODE_ENV == "test") {
    return "./db/database.test.sqlite"
  }

  return "./db/database.dev.sqlite"
}

export default {
  name: "crm service",
  port: process.env.PORT || 3000,
  env: process.env.NODE_ENV,
  storage: getStorage(),
}
