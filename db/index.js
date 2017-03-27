import Sequelize from 'sequelize'

const sequelize = new Sequelize('database', 'username', 'password', {
  dialect: "sqlite",

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

  storage: './db/database.dev.sqlite'
})

export default sequelize

