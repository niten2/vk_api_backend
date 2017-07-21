import { User } from "api/models"
import { createJwt } from "api/services/createJwt"

import {
  GraphQLObjectType,
} from 'graphql'

      // let z = new GraphQLObjectType({
      //   name: 'JwtToken',
      //   fields: {
      //     token: "33333"
      //   }
      // });

// console.log(z)


export const resolvers = {

  Query: {
    users: async () => {
      const users = await User.findAll()
      return users
    },

    user: async (root, args) => {
      const user = await User.findById(args.id)
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

      // console.log(createJwt(user))

      return new GraphQLObjectType({
        name: 'JwtToken',
        fields: {
          token: "33333"
        }
      })



      // if (user) {
      //   return { token: createJwt(user) }
      // } else {
      //   return null
      // }
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

