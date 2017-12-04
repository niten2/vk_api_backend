import { Person, Tag, Group } from "api/models"
import { GraphQLObjectType } from 'graphql-tools'
import { merge } from 'ramda'
import { PubSub } from 'graphql-subscriptions'

const pubsub = new PubSub()

const authenticated = (fn) => (parent, args, context, info) => {
  if (context.user_id) {
    return fn(parent, args, context, info)
  }
  throw new Error('User is not authenticated')
}

const Query = {
  persons: authenticated(async (_, args, context, info) => {
    return await Person.findAll({
      offset: args.pagination && args.pagination.offset,
      limit: args.pagination && args.pagination.limit,
    })
  }),
  groups: async (root, args, context) => {
    return await Group.findAll({
      offset: args.pagination && args.pagination.offset,
      limit: args.pagination && args.pagination.limit,
    })
  },
  tags: async (root, args, context) => {
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
    const { name } = args.input
    let count

    const Models = {
      "Person": Person,
      "Tag": Tag,
      "Group": Group,
    }

    const model = Models[name]

    if (model) {
      count = await model.count()
    }

    return { count }
  },
}

const Mutation = {
  createPerson: async (_, args, context) => {
    const attributes = merge(
      args.input,
      { user_id: context.user_id }
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
    throw new Error("updatePerson")
  },

  deletePerson: async (_, args, context) => {
    return await Person.destroy({ where: { id: args.input.id } })
  },

  createGroup: async (_, args, context) => {
    const attributes = merge(
      args.input,
      { user_id: context.user_id }
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
    throw new Error("updateGroup")
  },

  deleteGroup: async (_, args, context) => {
    return await Group.destroy({ where: { id: args.input.id } })
  },


  createTag: async (_, args, context) => {
    const attributes = merge(
      args.input,
      { user_id: context.user_id }
    )
    const object = await Tag.create(attributes)
    return object
  },

  updateTag: async (_, args, context) => {
    throw new Error("update Tag")
  },

  deleteTag: async (_, args, context) => {
    return await Tag.destroy({ where: { id: args.input.id } })
  },
}

const Subscription = {
  Group: {
    subscribe: () => {
      pubsub.asyncIterator('Group')
    }
  },
}

export const resolvers = { Query, Mutation, Subscription }
