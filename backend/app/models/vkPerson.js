import DataType from 'sequelize'
import Sequelize from 'db/sequelize'

let Person = Sequelize.define('vk_persons', {

  id: {
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },

  uid: {
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  },

  first_name: {
    type: DataType.STRING,
    field: 'first_name',
  },

  last_name: DataType.STRING,

  followers_count: {
    type: DataType.STRING
  },

  sex: {
    type: DataType.STRING
  },

  city: {
    type: DataType.STRING
  },

  bdate: {
    type: DataType.STRING
  },

  crop_photo_url: DataType.STRING,

  status: DataType.ENUM('active', 'inactive', "error"),

  isFriend: {
    type: DataType.BOOLEAN,
    defaultValue: false,
  },

  user_id: DataType.INTEGER,

  createdAt: {
    type: DataType.DATE,
    allowNull: false
  },

  updatedAt: DataType.DATE,

}, {

  instanceMethods: {
    addTag: async function(tag_id) {
      Tag.create({ taggable_id: this.id, tag_id: tag_id, taggable: 'users' })
    }
  },

  freezeTableName: true,
})

// User.addTag = async function(tag_id) {
//   let tag = await Tag.findById(tag_id)

//   if (tag) {
//     tag.addUser(user, { taggable: "users" })
//   }
// }

export default Person
