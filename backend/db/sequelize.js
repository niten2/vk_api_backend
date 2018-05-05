import Sequelize, { Op } from 'sequelize'
import settings from 'config/settings'

const buildLogging = () => {
  if (settings.isEnvTest) {
    return false
  }

  return console.log
}

const sequelize = new Sequelize(settings.databaseUrl, {
  operatorsAliases: Op,

  define: {
    freezeTableName: true,
  },

  logging: buildLogging(),
})

export const sync = (...args) => sequelize.sync(...args)
export const dropDb = () => sequelize.drop({ force: true })
export default sequelize
