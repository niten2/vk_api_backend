import { User } from "api/models"
import { createJwt } from "api/services/jwt"
import { GraphQLObjectType } from 'graphql-tools'

export const resolvers = {

  Query: {
    user: async (root, args, context) => {
      const user_id = context.payload.user_id
      return await User.findById(user_id)
    },
  },

  Mutation: {
    UserUpdate: async (_, args, context) => {
      const user_id = context.payload.user_id

      const object = await User.findById(user_id)

      await object.update({
        name: args.name,
        email: args.email,
        // password: args.password,
      })

      return object
    },

  },
}

