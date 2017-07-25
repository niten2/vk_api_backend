import { User } from "api/models"
import { createJwt } from "api/services/createJwt"
import { GraphQLObjectType } from 'graphql-tools'

export const resolvers = {

  Query: {
    users: async () => {
      const users = await User.findAll()
      return users
    },

    user: async (root, args) => {
      // const user = await User.findById(args.id)
      const user = await User.findById(1)
      return user
    },
  },

  Mutation: {

    JwtTokenCreate: async (root, args) => {
      let user = await User.findAll({
        where: {
          email: args.email,
          password: args.password,
        }
      })

      return { token: createJwt(user) }
    },

    UserCreate: async (root, args) => {
      const user = await User.create({
        email: args.email,
        password: args.password,
      })

      return user
    },

    UserUpdate: async (root, args) => {
      console.log(111111)
      // const object = await User.findById(args.id)
      const object = await User.findById(1)

      await object.update({
        name: args.name,
        email: args.email,
        // password: args.password,
      })

      return object
    },

  },
}

