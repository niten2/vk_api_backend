import { User } from "api/models"
import { createJwt } from "api/services/createJwt"

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
      if (user) {
        return {
          "token": "2222222",
          "email": "dsfsdfsdf",
          "password": "password",
        }
      } else {
        return null
      }
    },

    UserCreate: async (root, args) => {
      console.log(111111)
      console.log(args)
      const user = await User.create({
        email: args.email,
        password: args.password,
      })

      return user
    },

  },
}

