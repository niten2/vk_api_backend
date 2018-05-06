import DataType from 'sequelize'
import Sequelize from 'db/sequelize'

const User = Sequelize.define('users', {

  name: DataType.STRING,
  email: DataType.STRING,
  password: DataType.STRING,

  vk_token: DataType.STRING,
}, {

})

export default User
