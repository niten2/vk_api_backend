import Sequelize from 'sequelize'
import settings from 'config/settings'

const sequelize = new Sequelize('database', 'username', 'password', {
  dialect: "sqlite",

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

  storage: settings.storage,

  logging: () => {
    if (settings.isEnvTest) {
      return false
    }
  },
})

export default sequelize
