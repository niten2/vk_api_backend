import { Person, Tag, Group } from "api/models"
import { createJwt } from "api/services/jwt"
import { GraphQLObjectType } from 'graphql-tools'
import { merge } from 'ramda'
import { PubSub } from 'graphql-subscriptions'

const pubsub = new PubSub()

const Classes = {
  "Person": Person,
}

export const resolvers = {

  RootQuery: {
    persons: async (root, args) => {
      let { limit, offset } = args.pagination
      return await Person.findAll({
        limit: limit,
        offset: offset,
      })
    },
    groups: async (root, args, context) => {
      return await Group.findAll()
    },
    tags: async (root, args, context) => {
      console.log(args)

      if (args.filter && args.filter.name) {
        const objects = await Tag.findAll({
          where: {
            name: {
              $like: `%${args.filter.name}%`
            }
          }
        })

        return objects

      } else {
        return await Tag.findAll()
      }

    },
    meta: async (root, args) => {
      const model = Classes[args.name]
      if (model) {
        const count = await model.count()
        return {
          count: count
        }
      }
    },
  },

  RootMutation: {
    createPerson: async (_, args, context) => {
      const attributes = merge(
        args.input,
        { user_id: context.payload.user_id }
      )
      const object = await Person.create(attributes)

      pubsub.publish('Person', {
        Person: {
          mutation: 'CREATED', node: object
        }
      })

      return object
    },

    updatePerson: async (_, args, context) => {
      console.log(11111, "updatePerson")
    },

    deletePerson: async (_, args, context) => {
      return await Person.destroy({ where: { id: args.input.id } })
    },


    createGroup: async (_, args, context) => {
      const attributes = merge(
        args.input,
        // { user_id: context.payload.user_id }
        { user_id: 1 }
      )
      const object = await Group.create(attributes)

      await pubsub.publish('Group', {
        Group: {
          mutation: 'CREATED', node: object, test: 33333333333333,
        }
      })

      return object
    },

    updateGroup: async (_, args, context) => {
      console.log(11111, "updateGroup")
    },

    deleteGroup: async (_, args, context) => {
      return await Group.destroy({ where: { id: args.input.id } })
    },


    createTag: async (_, args, context) => {
      const attributes = merge(
        args.input,
        { user_id: context.payload.user_id }
      )
      const object = await Tag.create(attributes)
      return object
    },

    updateTag: async (_, args, context) => {
      console.log(11111, "updateGroup")
    },

    deleteTag: async (_, args, context) => {
      return await Tag.destroy({ where: { id: args.input.id } })
    },



  },

  RootSubscription: {
    Group: {
      subscribe: () => {
        console.log(11111111111111111111111111111, "RootSubscription")
        pubsub.asyncIterator('Group')
      }
    },
  },

}
