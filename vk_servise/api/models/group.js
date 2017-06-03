import db from 'db'
import Sequelize from 'sequelize'
import Tag from 'api/models/tag'
import { parseGroup } from "api/services/vk"
import R from "ramda"

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
    addTag: async (tag_id) => {
      Tag.create({
        taggable_id: this.id,
        tag_id: tag_id,
        taggable: 'groups',
      })
    }
  },

  freezeTableName: true,
})

Group.createByUrls = async (urls, tagId) => {
  const promises = await R.map(parseGroup, urls)

  return await Promise.all(
    promises.map(async (promise) => {
      let group = await promise
      group.addTag(tagId)
      return group
    })
  )
}

export default Group
