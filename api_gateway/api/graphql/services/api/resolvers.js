import { Setting, User } from "api/models"
import { createJwt } from "api/services/jwt"

const authenticated = (fn) => (parent, args, context, info) => {
  console.log(1111)
  console.log(context)
  if (context.payload) {
    return fn(parent, args, context, info);
  }
  throw new Error('User is not authenticated')
}

export const ApiQuery = {
  // public
  users: async (_, args, context) => {
    const users = await User.findAll({ raw: true })
    return users
  },

  // private
  user: async (_, args, context) => {
    const user_id = context.payload.user_id
    return await User.findById(user_id)
  },

  settings: async (root, args) => {
    return await Setting.findAll({
      offset: args.pagination && args.pagination.offset,
      limit: args.pagination && args.pagination.limit,
    })
  },

}

export const ApiMutation = {

  // public
  createJwtToken: async (_, args) => {
    const { email, password } = args.input
    const user = await User.findOne({
      where: {
        email: email,
      }
    })

    if (user && user.password == password) {
      return { token: createJwt(user) }
    } else {
      throw new Error('Email or Password incorrect')
    }
  },

  createUser: async (root, args) => {
    const user = await User.create({
      email: args.email,
      password: args.password,
    })

    return user
  },


  // private
  updateUser: authenticated(async (_, args, context) => {
    const user = await User.findById(context.payload.user_id)
    return await user.update(args.input)
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
