import db from 'db'
import Sequelize from 'sequelize'
import Tag from 'api/models/tag'
import ItemTag from 'api/models/item_tag'
import { replace } from "lodash"

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

  status: {
    type: Sequelize.STRING
  },

}, {

  instanceMethods: {
    setVkAttributes: function(url) {

      console.log(url)
      let uid = replace(replace(url, "https://vk.com/", ""), "id", "")

      // let uid = replace(url, "https://vk.com/", "")

      console.log(uid)
      // vk.request('users.get', { 'user_id' : 11222}, function(req) {

      //   console.log(req.response)
      //   User
      // })

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

// User.setVkAttributes = async function(url) {
//   console.log(this)
//   console.log(1111)

//   // vk.request('users.get', { 'user_id' : 11222}, function(req) {

//   //   console.log(req.response)
//   //   User


//   // })

// }

export default User
