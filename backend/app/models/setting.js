import DataType from 'sequelize'
import Sequelize from 'db/sequelize'

const Setting = Sequelize.define('settings', {

  name: DataType.STRING,
  value: DataType.STRING,

}, {

})

export default Setting
