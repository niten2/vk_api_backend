import db from 'db'
import Sequelize from 'sequelize'

let ItemTag = db.define('item_tags', {

  id : {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  tag_id: {
    type: Sequelize.INTEGER,
    unique: 'item_tag_taggable'
  },

  taggable_id: {
    type: Sequelize.INTEGER,
    unique: 'item_tag_taggable',
    references: null
  },

  taggable: {
    type: Sequelize.ENUM('groups', 'users'),
    unique: 'item_tag_taggable'
  },

})

export default ItemTag
