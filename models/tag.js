import db from 'db'
import Sequelize from 'sequelize'

let Tag = db.define('tags', {

  name: {
    type: Sequelize.STRING
  },

  status: {
    type: Sequelize.STRING
  },

  kind: {
    type: Sequelize.ENUM,
    values: ['active', 'pending', 'deleted'],
  },

}, {
  freezeTableName: true
})

export default Tag

