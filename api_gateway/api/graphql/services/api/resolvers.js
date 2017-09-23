import { Setting, User } from "api/models"
import { createJwt } from "api/services/jwt"

const authenticated = (fn) => (parent, args, context, info) => {
  if (context.payload && context.payload.user_id) {
    return fn(parent, args, context, info);
  }
  throw new Error('User is not authenticated')
}

export const ApiQuery = {
  users: async (_, args, context) => {
    const users = await User.findAll({ raw: true })
    return users
  },

  user: authenticated(async (_, args, context) => {
    const user_id = context.payload.user_id
    return await User.findById(user_id)
  }),

  settings: authenticated(async (root, args, context) => {
    return await Setting.findAll({
      offset: args.pagination && args.pagination.offset,
      limit: args.pagination && args.pagination.limit,
    })
  }),
}

export const ApiMutation = {

  createJwtToken: async (_, args) => {
    const { email, password } = args.input
    try {
      const user = await User.findOne({
        where: {
          email: email,
        }
      })

      if (user.password !== password) {
        throw new Error('Email or Password incorrect')
      }

      return { token: createJwt(user) }
    } catch (err) {
      throw new Error('Email or Password incorrect')
    }
  },

  createUser: async (root, args) => {
    return await User.create({
      name: args.input.name,
      email: args.input.email,
      password: args.input.password,
    })
  },

  // NOTE private
  updateUser: authenticated(async (_, args, context) => {
    const user = await User.findById(context.payload.user_id)
    return user.update(args.input)
  }),

  createSetting: async (_, args, context) => {
    const attributes = merge(
      args.input,
      { user_id: context.payload.user_id }
    )
    return await Setting.create(attributes)
  },

  updateSetting: async (_, args, context) => {
    const setting = await Setting.findById(args.id)
    return await setting.update(args.input)
  },

}
