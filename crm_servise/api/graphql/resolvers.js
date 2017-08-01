import { Status, Client } from "api/models"

export const resolvers = {
  RootQuery: {
    clients: async (root, args) => {
      let { limit, offset } = args.pagination
      return await Client.findAll({
        include: {
          model: Status,
        },
        offset: offset,
        limit: limit,
      })
    },

    client: async (root, args) => {
      const client = await Client.findById(args.id)
      return client
    },

    statuses: async () => {
      return await Status.findAll({})
    },

    status: async (root, args) => {
      const object = await Status.findById(args.id)
      return object
    },

    meta: async (root, args) => {
      const Classes = {
        "Client": Client,
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
      const client = await Client.create({
        name: args.name,
        number: args.number,
        phone: args.phone,
        note: args.note,
        date_birth: args.date_birth,
      })
      return client
    },

    updateClient: async (root, args) => {
      const client = await Client.findById(args.id)

      await client.update({
        name: args.name,
        number: args.number,
        phone: args.phone,
        note: args.note,
        date_birth: args.date_birth,
        status_id: args.status_id,
      })

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
      const object = await Status.create({
        name: args.name,
      })
      return object
    },

    updateStatus: async (root, args) => {
      const object = await Status.findById(args.id)

      await object.update({
        name: args.name,
      })

      return object
    },

    deleteStatus: async (root, { id }) => {
      await Status.destroy({
        where: {
          id: id
        }
      })
    },


  },
}

