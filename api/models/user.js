import db from 'db'
import Sequelize from 'sequelize'

let User = db.define('users', {

  // taggable_id: {
  //   type: Sequelize.INTEGER,
  // },

  uid: {
    type: Sequelize.STRING,
  },

  first_name: {
    type: Sequelize.STRING,
    field: 'first_name',
  },

  last_name: {
    type: Sequelize.STRING
  },

  followers_count: {
    type: Sequelize.STRING
  },

  sex: {
    type: Sequelize.STRING
  },

  city: {
    type: Sequelize.STRING
  },

  bdate: {
    type: Sequelize.STRING
  },

  crop_photo_url: {
    type: Sequelize.STRING
  },

  status: {
    type: Sequelize.STRING
  },

}, {
  freezeTableName: true
})

export default User

