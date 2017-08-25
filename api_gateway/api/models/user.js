import db from 'db'
import Sequelize from 'sequelize'

const User = db.define('users', {

  name: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,

}, {

})

export default User
