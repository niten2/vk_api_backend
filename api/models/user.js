import db from 'db'
import Sequelize from 'sequelize'
import Tag from 'api/models/tag'
import ItemTag from 'api/models/item_tag'

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

  // instanceMethods: {
  //   setVkAttributes: function(url) {
  //     let uid = replace(replace(url, "https://vk.com/", ""), "id", "")
  //     console.log(uid)


  //     // let users = await User.findAll()

  //     // User.findAll().then(response => {
  //     //   console.log(response)
  //     //   console.log(111111111111111111111)
  //     // })



  //     // let user = await User.findOrCreate({
  //     //   where: { uid: uid},
  //     // })

  //       // // console.log(response)

  //     // })

  //     // User.find


  //     // vk.request('users.get', { 'user_id' : 11222}, function(req) {

  //     //   console.log(req.response)
  //     //   User
  //     // })

  //   }
  // },

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
