import db from 'db'
import Sequelize from 'sequelize'

let Tag = db.define('tags', {

  name: {
    type: Sequelize.STRING
  },

  status: {
    type: Sequelize.STRING
  },

  kind: Sequelize.ENUM('groups', 'users'),

  user_id: Sequelize.INTEGER,

}, {
  freezeTableName: true
})

export default Tag
