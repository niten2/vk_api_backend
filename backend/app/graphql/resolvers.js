import { merge, path, prop, last } from "ramda"
import moment from "moment"
// import { path } from "ramda"
import { User, VkPerson, Setting } from "app/models"
import { createJwt } from "app/services/jwt"
import { authenticated } from "app/services/graphql"
import Sequelize, { Op } from "sequelize"

const Query = {

  vkPersons: authenticated(async (root, args, ctx) => {
    const { user } = ctx
    const { cursor, limit = 15 } = args.input

    let options = { user_id: user.id }

    const addFriendAt = path(["input", "filter", "addFriendAt"], args)
    if (addFriendAt) {
      options = merge({
        where: {
          addFriendAt: {
            [Op.gt]: moment(addFriendAt).add(-1, 'days').toDate(),
            [Op.lt]: moment(addFriendAt).add(1, 'days').toDate(),
          }
        }
      }, options)
    }

    if (cursor) {
      options = merge({
        where: {
          id: {
            // [Op.gt]: new Date(parseInt(cursor))
            [Op.gt]: parseInt(cursor)
          }
        }
      }, options)
    }

    options.limit = limit || 15

    let vkPersons = await VkPerson.findAll(options)
    const count = await VkPerson.count({ user_id: user.id })

    // console.log(cursor)
    console.log(vkPersons.map((vk) => vk.id))

    const newCursor = prop("id", last(vkPersons))

    return {
      vkPersons,
      count,
      // cursor: newCursor && newCursor.getTime(),
      cursor: newCursor,
    }
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
    const { user } = ctx
    let { ids } = args.input

    ids = ids.split("\n")

    let persons = []
    let errors = []

    await Promise.all(
      ids.map(async (id) => {
        try {
          let person = await VkPerson.create({ uid: id, user_id: user.id })
          persons.push(person)

        } catch (err) {
          errors.push({
            uid: id,
            message: err.message,
          })
        }
      })
    )

    return {
      persons,
      errors,
    }
  }),


}

export default { Query, Mutation }
