import db from 'db'
import Sequelize from 'sequelize'

const Status = db.define('statuses', {

  name: Sequelize.STRING,

}, {
  freezeTableName: true,
})

export default Status
