import moment from "moment"
import bcrypt from "bcrypt-nodejs"
import DataType, { Op } from "sequelize"
import Sequelize from 'db/sequelize'

const schema = Sequelize.define('users', {

  name: DataType.STRING,
  email: DataType.STRING,
  password: DataType.STRING,

  vk_token: DataType.STRING,
  vk_active: DataType.BOOLEAN,

}, {

})

schema.hook('beforeSave', async function(user, options) {
  if (user.changed('password')) user.password = await bcrypt.hashSync(user.password)
})

schema.prototype.comparePassword = async function(candidatePassword) {
  return await bcrypt.compareSync(candidatePassword, this.password)
}

schema.prototype.isFriendNeed = async function() {
  const countFriend = await this.countTodayFriend()
  return  25 >= countFriend
}

schema.prototype.countTodayFriend = async function() {
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

export default schema
