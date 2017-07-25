import { User } from "api/models"
import { createJwt } from "api/services/createJwt"
import { GraphQLObjectType } from 'graphql-tools'

export const resolvers = {

  Query: {
    users: async (root, args) => {
      const users = await User.findAll()
      return users
    },

    user: async (root, args, context) => {
      const user_id = context.user.id
      const user = await User.findById(user_id)
      return user
    },
  },

  Mutation: {

    JwtTokenCreate: async (root, args) => {
      const users = await User.findAll({
        where: {
          email: args.email,
          password: args.password,
        }
      })
      const user = users[0]

      if (user) {
        return { token: createJwt(user) }
      }
    },

    UserCreate: async (root, args) => {
      const user = await User.create({
        email: args.email,
        password: args.password,
      })

      return user
    },

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

