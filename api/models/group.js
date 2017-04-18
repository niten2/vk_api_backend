import db from 'db'
import Sequelize from 'sequelize'

import Tag from 'api/models/tag'

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

  instanceMethods: {
    addTagT: async function(tag_id) {
      let tag = await Tag.findById(tag_id)

      return 111
      // console.log(tag)
      // if (tag) {
      //   tag.addGroups(this, { taggable: "groups" })
      // }

    }
  },

  freezeTableName: true,
})

export default Group
