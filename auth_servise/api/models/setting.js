import db from 'db'
import Sequelize from 'sequelize'

const Setting = db.define('settings', {

  name: Sequelize.STRING,
  value: Sequelize.STRING,

}, {

})

export default Setting
