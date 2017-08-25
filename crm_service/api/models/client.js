import db from 'db'
import Sequelize from 'sequelize'

const Client = db.define('clients', {

  name: Sequelize.STRING,
  number: Sequelize.INTEGER,
  phone: Sequelize.INTEGER,
  note: Sequelize.STRING,
  date_birth: Sequelize.STRING,

}, {
  freezeTableName: true,
})

export default Client
