import { Person, Tag, Group } from "api/models"
import { createJwt } from "api/services/jwt"
import { GraphQLObjectType } from 'graphql-tools'
import { merge } from 'ramda'

export const resolvers = {

  RootQuery: {
    persons: async (root, args) => {
      return await Person.findAll({})
    },
    tags: async (root, args, context) => {
      return await Tag.findAll()
    },
    groups: async (root, args, context) => {
      return await Group.findAll()
    },
  },

  RootMutation: {
    createPerson: async (_, args, context) => {
      const attributes = merge(
        args.input,
        { user_id: context.payload.user_id }
      )

      console.log(attributes)


      const object = await Person.create(attributes)

      console.log(object)

      return object
    },

    updatePerson: async (_, args, context) => {
      console.log(11111, "update")
    },

    deletePerson: async (_, args, context) => {
      return await Person.destroy({ where: { id: args.input.id } })
    },

  },
}

