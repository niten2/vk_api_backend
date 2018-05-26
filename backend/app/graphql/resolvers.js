import moment from "moment"
import Sequelize, { Op } from "sequelize"
import { merge, path, prop, last } from "ramda"
import { User, VkPerson, Setting } from "app/models"
import { createJwt } from "app/services/jwt"
import { authenticated } from "app/services/graphql"

const Query = {

  vkPersons: authenticated(async (root, args, ctx) => {
    const { user } = ctx
    const { cursor, limit = 15 } = args.input
    let query = { user_id: user.id }

    const addFriendAt = path(["input", "filter", "addFriendAt"], args)
    if (addFriendAt) {
      query = merge({
        where: {
          addFriendAt: {
            [Op.gt]: moment(addFriendAt).add(-1, 'days').toDate(),
            [Op.lt]: moment(addFriendAt).add(1, 'days').toDate(),
          }
        }
      }, query)
    }

    if (cursor) {
      query = merge({
        where: {
          id: {
            [Op.gt]: parseInt(cursor)
          }
        }
      }, query)
    }

    query.limit = limit || 15

    const vkPersons = await VkPerson.findAll(query)
    const count = await VkPerson.count({ user_id: user.id })
    const newCursor = prop("id", last(vkPersons))

    return {
      vkPersons,
      count,
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
