import { Setting, User } from "api/models"
import { createJwt } from "api/services/jwt"

export const resolvers = {

  RootQuery: {
    user: async (root, args, context) => {
      const user_id = context.payload.user_id
      return await User.findById(user_id)
    },

    settings: async (root, args) => {
      return await Setting.findAll({
        offset: args.pagination && args.pagination.offset,
        limit: args.pagination && args.pagination.limit,
      })
    },

    meta: async (root, args) => {
      const Classes = {
        "Setting": Client,
      }
      const model = Classes[args.name]
      if (model) {
        const count = await model.count()
        return {
          count: count
        }
      }
    },

  },

  RootMutation: {
    updateUser: async (_, args, context) => {
      const user = await User.findById(args.id)
      return await user.update(args.input)
    },

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

  },

}

