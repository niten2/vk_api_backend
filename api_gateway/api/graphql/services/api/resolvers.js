import { Setting, User } from "api/models"

const authenticated = (fn) => (parent, args, context, info) => {
  if (context.payload) {
    return fn(parent, args, context, info);
  }
  throw new Error('User is not authenticated')
}


export const ApiQuery = {
  // public
  users: async (root, args) => {
    const users = await User.findAll()
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
  createJwtToken: async (root, args) => {
    const user = await User.findOne({
      where: {
        email: args.email,
      }
    })
    if (user && user.password == args.password) {
      return { token: createJwt(user) }
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
