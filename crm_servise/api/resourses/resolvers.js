import { Client } from "api/models"

export const resolvers = {

  Query: {
    clients: async () => {
      const clients = await Client.findAll({
        // where: {
        //   id: [ 22, 23, 25 ]
        // }
      })
      return clients
    },

    channels: () => {
      return channels;
    },

    channel: (root, { id }) => {
      return channels.find(channel => channel.id === id);
    },
  },

  Mutation: {

    // addChannel: (root, args) => {
    //   const newChannel = { id: String(nextId++), messages: [], name: args.name };
    //   channels.push(newChannel);
    //   return newChannel;
    // },

    // addMessage: (root, { message }) => {
    //   const channel = channels.find(channel => channel.id === message.channelId);
    //   if(!channel)
    //     throw new Error("Channel does not exist");

    //   const newMessage = { id: String(nextMessageId++), text: message.text };
    //   channel.messages.push(newMessage);

    //   return newMessage;
    // },

    addClient: async (root, args) => {
      const client = await Client.create({
        name: args.name,
        number: args.number,
        phone: args.phone,
        note: args.note,
        date_birth: args.date_birth,
      })
      return client
    },

    ClientDelete: async (root, { id }) => {
      console.log(root, id)
      await Client.destroy({
        where: {
          id: id
        }
      })
      // return id
      // return `client with id = ${args.id} destroy`
      // return "client with id = destroy"
    },


  },
}
