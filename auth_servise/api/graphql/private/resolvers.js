import { User } from "api/models"
import { createJwt } from "api/services/jwt"
import { GraphQLObjectType } from 'graphql-tools'

export const resolvers = {

  Query: {
    user: async (root, args, context) => {
      const user_id = context.user.id
      const user = await User.findById(user_id)
      return user
    },
  },

  Mutation: {
    UserUpdate: async (_, args, context) => {
      const user_id = context.user.id

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

