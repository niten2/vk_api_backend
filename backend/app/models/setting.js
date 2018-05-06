import DataType from 'sequelize'
import Sequelize from 'db/sequelize'

const Setting = Sequelize.define('settings', {

  name: DataType.STRING,
  value: DataType.STRING,
  user_id: DataType.INTEGER,

}, {

})

export const NAME_COUNT_FRIEND_IN_DAY = "name count friend in day"

export default Setting
