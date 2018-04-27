import Sequelize, { Op } from 'sequelize'
import settings from 'config/settings'

const sequelize = new Sequelize(settings.databaseUrl, {
  operatorsAliases: Op,

  define: {
    freezeTableName: true,
  },

  logging: () => {
    if (settings.isEnvTest) {
      return false
    }
  }
})

export const sync = (...args) => sequelize.sync(...args)
export const dropDb = () => sequelize.drop({ force: true })
export default sequelize
