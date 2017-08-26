import { Status, Client } from "api/models"
// import { props } from "ramda"

export const resolvers = {

  RootQuery: {
    clients: async (root, args) => {
      console.log(11111)
      console.log(args)
      const z = await Client.findAll({
        include: {
          model: Status,
        },
        offset: args.pagination && args.pagination.offset,
        limit: args.pagination && args.pagination.limit,
      })
      // console.log(z)
      return z
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
      const Classes = {
        "Client": Client,
        "Status": Status,
      }
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

    createClient: async (root, args) => {
      const client = await Client.create(args.input)
      return client
    },

    updateClient: async (root, args) => {
      const client = await Client.findById(args.id)
      await client.update(args.input)
      return client
    },

    deleteClient: async (root, { id }) => {
      await Client.destroy({
        where: {
          id: id
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

  },
}

