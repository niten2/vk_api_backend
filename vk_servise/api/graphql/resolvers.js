import { Person, Tag, Group } from "api/models"
import { createJwt } from "api/services/jwt"
import { GraphQLObjectType } from 'graphql-tools'

export const resolvers = {

  Query: {
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

  Mutation: {
    personCreate: async (_, args, context) => {
      const user_id = context.user_id
      const {
        name,
        email,
        uid,
        first_name,
        last_name,
        followers_count,
        sex,
        city,
        bdate,
        crop_photo_url,
        status,
      } = args

      const object = await Person.create({
        name,
        email,
        uid,
        first_name,
        last_name,
        followers_count,
        sex,
        city,
        bdate,
        crop_photo_url,
        status,
        user_id,
      })

      console.log(object)
      return object
    },

    personDelete: async (_, args, context) => {
      return await Person.destroy({
        where: { id: args.id }
      })
    }

  },
}

