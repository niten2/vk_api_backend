import moment from "moment"
import DataType, { Op } from "sequelize"
import Sequelize from 'db/sequelize'

const User = Sequelize.define('users', {

  name: DataType.STRING,
  email: DataType.STRING,
  password: DataType.STRING,

  vk_token: DataType.STRING,

}, {
})

User.prototype.countTodayFriend = async function() {
  let res = await this.getVkPersons({
    where: {
      addFriendAt: {
        [Op.gt]: moment().add(-1, 'days').toDate(),
        [Op.lt]: moment().add(1, 'days').toDate(),
      }
    }
  })

  return res.length
}

User.prototype.friendNotEnough = async function() {
  return await this.countTodayFriend() >= 25
}


export default User
