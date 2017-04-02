import db from 'db'
import Sequelize from 'sequelize'

let Group = db.define('groups', {

  screen_name: {
    type: Sequelize.STRING,
  },

  gid: {
    type: Sequelize.STRING,
  },

  name: {
    type: Sequelize.STRING,
  },

  members_count: {
    type: Sequelize.STRING,
  },

  note: {
    type: Sequelize.STRING,
  },

  photo_50: {
    type: Sequelize.STRING,
  },

  status: {
    type: Sequelize.STRING,
  },

}, {
  freezeTableName: true
})

export default Group
