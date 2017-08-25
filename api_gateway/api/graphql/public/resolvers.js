import { User } from "api/models"
import { createJwt } from "api/services/jwt"
import { GraphQLObjectType } from 'graphql-tools'

export const resolvers = {

  Query: {
    users: async (root, args) => {
      const users = await User.findAll()
      return users
    },
  },

  Mutation: {
    JwtTokenCreate: async (root, args) => {
      const user = await User.findOne({
        where: {
          email: args.email,
        }
      })
      if (user && user.password == args.password) {
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

  },
}

