import { Status, Client } from "api/models"

const Query = {
  clients: async (root, args) => {
    const clients = await Client.findAll({
      include: {
        model: Status,
      },
      offset: args.pagination && args.pagination.offset,
      limit: args.pagination && args.pagination.limit,
    })
    return clients
  },

  client: async (root, args) => {
    const client = await Client.findById(args.id)
    return client
  },

  statuses: async (_, args) => {
    return await Status.findAll({
      offset: args.pagination && args.pagination.offset,
      limit: args.pagination && args.pagination.limit,
    })
  },

  status: async (root, args) => {
    const object = await Status.findById(args.id)
    return object
  },

  meta: async (root, args) => {
    const { names } = args.input

    const Classes = {
      "Status": Status,
      "Client": Client,
    }

    const count = await names.reduce (async (acc, name) => {
      const model = Classes[name]
      if (model) { acc[name] = await model.count() }
      return acc
    }, {})

    return { count }
  },
}

const Mutation = {

  createClient: async (root, args) => {
    const client = await Client.create(args.input)
    return client
  },

  updateClient: async (root, args) => {
    const client = await Client.findById(args.id)
    await client.update(args.input)
    return client
  },

  deleteClient: async (_, args) => {
    await Client.destroy({
      where: {
        id: args.input.id
      }
    })
  },

  createStatus: async (root, args) => {
    const object = await Status.create(args.input)
    return object
  },

  updateStatus: async (root, args) => {
    const object = await Status.findById(args.id)
    await object.update(args.input)
    return object
  },

  deleteStatus: async (root, args) => {
    await Status.destroy({
      where: {
        id: args.input.id
      }
    })
  },

}

export const resolvers = { Query, Mutation }
