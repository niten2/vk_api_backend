import DataType from 'sequelize'
import Sequelize from 'db/sequelize'

const User = Sequelize.define('users', {

  name: DataType.STRING,
  email: DataType.STRING,
  password: DataType.STRING,

  vk_token: DataType.STRING,
}, {

  instanceMethods: {
    // add: async (tag_id) => {
    //   Tag.create({
    //     taggable_id: this.id,
    //     tag_id: tag_id,
    //     taggable: 'groups',
    //   })
    // }
  },


})

export default User
