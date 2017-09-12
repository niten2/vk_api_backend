import Sequelize from 'sequelize'
import Settings from 'config/settings'

const sequelize = new Sequelize(
  'database',
  'username',
  'password',
  {
    dialect: "sqlite",
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
    storage: Settings.storage,
  }
)

export default sequelize
