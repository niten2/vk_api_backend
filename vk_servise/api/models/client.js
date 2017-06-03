import db from 'db'
import Sequelize from 'sequelize'
// import R from "ramda"

const Client = db.define('clients', {

  number: Sequelize.INTEGER,
  name: Sequelize.STRING,
  phone: Sequelize.INTEGER,
  date_birth: Sequelize.STRING,
  note: Sequelize.STRING,

}, {
  freezeTableName: true,
})

export default Client
