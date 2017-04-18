import db from 'db'
import Sequelize from 'sequelize'

import Tag from 'api/models/tag'

let User = db.define('users', {

  uid: Sequelize.STRING,

  first_name: {
    type: Sequelize.STRING,
    field: 'first_name',
  },

  last_name: Sequelize.STRING,

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

  status: Sequelize.ENUM('active', 'inactive'),

}, {

  instanceMethods: {
    addTag: async function(tag_id) {
      let tag = await Tag.findById(tag_id)

      if (tag) {
        tag.addUser(user, { taggable: "users" })
      }
    }
  },

  freezeTableName: true,
})

User.addTag = async function(tag_id) {
  let tag = await Tag.findById(tag_id)

  if (tag) {
    tag.addUser(user, { taggable: "users" })
  }
}

export default User
