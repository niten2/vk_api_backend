import { Person, Tag, Group } from "api/models"
import { createJwt } from "api/services/jwt"
import { GraphQLObjectType } from 'graphql-tools'

export const resolvers = {

  Query: {
    persons: async (root, args) => {
      console.log(1111)
      const persons = await Person.findAll({})

      console.log(persons)
      return persons

    },
    tags: async (root, args, context) => {
      return await Tag.findAll()
    },
    groups: async (root, args, context) => {
      return await Group.findAll()
    },
  },

  // Mutation: {
    // UserUpdate: async (_, args, context) => {
    //   const user_id = context.user.id

    //   const object = await User.findById(user_id)

    //   await object.update({
    //     name: args.name,
    //     email: args.email,
    //     // password: args.password,
    //   })

    //   return object
    // },

  // },
}

