import { Status, Client } from "api/models"

export const resolvers = {

  Query: {
    clients: async (root, args) => {
      const clients = await Client.findAll({
        include: {
          model: Status,
        }
      })
      return clients
    },

    client: async (root, args) => {
      const client = await Client.findById(args.id)
      return client
    },

    statuses: async () => {
      const objects = await Status.findAll({})
      return objects
    },

    status: async (root, args) => {
      const object = await Status.findById(args.id)
      return object
    },
  },

  Mutation: {

    clientCreate: async (root, args) => {
      const client = await Client.create({
        name: args.name,
        number: args.number,
        phone: args.phone,
        note: args.note,
        date_birth: args.date_birth,
      })
      return client
    },

    clientUpdate: async (root, args) => {
      console.log(args)
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

    clientDelete: async (root, { id }) => {
      await Client.destroy({
        where: {
          id: id
        }
      })
    },


    statusCreate: async (root, args) => {
      const object = await Status.create({
        name: args.name,
      })
      return object
    },

    statusUpdate: async (root, args) => {
      const object = await Status.findById(args.id)

      await object.update({
        name: args.name,
      })

      return object
    },

    statusDelete: async (root, { id }) => {
      await Status.destroy({
        where: {
          id: id
        }
      })
    },



  },
}

