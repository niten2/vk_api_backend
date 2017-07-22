import { Client } from "api/models"

export const resolvers = {

  Query: {
    clients: async () => {
      console.log(1111)
      const clients = await Client.findAll({})
      return clients
    },

    client: async (root, args) => {
      const client = await Client.findById(args.id)
      return client
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
      const client = await Client.findById(args.id)

      await client.update({
        name: args.name,
        number: args.number,
        phone: args.phone,
        note: args.note,
        date_birth: args.date_birth,
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

  },
}

