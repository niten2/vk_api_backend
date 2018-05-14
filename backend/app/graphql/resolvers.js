import moment from "moment"
import { path } from "ramda"
import { User, VkPerson, Setting } from "app/models"
import { createJwt } from "app/services/jwt"
import { authenticated } from "app/services/graphql"
import { Op } from "sequelize"

const Query = {

  vkPersons: authenticated(async (root, args, ctx) => {
    const { user } = ctx
    let options = {}

    const addFriendAt = path(["input", "filter", "addFriendAt"], args)

    if (addFriendAt) {
      options = {
        where: {
          addFriendAt: {
            [Op.gt]: moment(addFriendAt).add(-1, 'days').toDate(),
            [Op.lt]: moment(addFriendAt).add(1, 'days').toDate(),
          }
        }
      }
    }

    const persons = await user.getVkPersons(options)

    return persons
  }),

  me: authenticated(async (root, args, ctx) => {
    const user = await User.findById(ctx.user.id)

    return user
  }),

  settings: authenticated(async (root, args, ctx) => {
    const settings = await Setting.findAll()

    return settings
  }),

}

const Mutation = {

  createUser: async (root, args, ctx) => {
    const user = await User.create(args.input)
    const token = await createJwt(user)

    return {
      token,
      user
    }
  },

  updateMe: authenticated(async (root, args, ctx) => {
    const { user } = ctx

    await user.set(args.input)
    await user.save()

    return user
  }),

  createToken: async (_, args) => {
    const { email, password } = args.input

    const user = await User.findOne({ where: { email } })

    if (!user) {
      throw new Error("user not found")
    }

    if (!await user.comparePassword(password)) {
      throw new Error("wrong password")
    }

    const token = await createJwt(user)

    return {
      user,
      token,
    }
  },

  createVkFriends: authenticated(async (root, args, ctx) => {
    let { ids } = args.input

    ids = ids.split("\n")


    let persons = await Promise.all(
      ids.map(async (id) => {
        return await VkPerson.create({ uid: id })
      })
    )

    return persons
  }),


}

export default { Query, Mutation }
