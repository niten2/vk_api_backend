import { Client } from "api/models"

// const channels = [{
//   id: '1',
//   name: 'soccer',
//   messages: [{
//     id: '1',
//     text: 'soccer is football',
//   }, {
//     id: '2',
//     text: 'hello soccer world cup',
//   }]
// }, {
//   id: '2',
//   name: 'baseball',
//   messages: [{
//     id: '3',
//     text: 'baseball is life',
//   }, {
//     id: '4',
//     text: 'hello baseball world series',
//   }]
// }];

// let nextId = 3;
// let nextMessageId = 5;

export const resolvers = {

  Query: {
    clients: async () => {
      const clients = await Client.findAll()
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

    addChannel: (root, args) => {
      const newChannel = { id: String(nextId++), messages: [], name: args.name };
      channels.push(newChannel);
      return newChannel;
    },

    addMessage: (root, { message }) => {
      const channel = channels.find(channel => channel.id === message.channelId);
      if(!channel)
        throw new Error("Channel does not exist");

      const newMessage = { id: String(nextMessageId++), text: message.text };
      channel.messages.push(newMessage);

      return newMessage;
    },

    addClient: async (root, args) => {
      const client = await Client.create({ name: args.name })
      return client
    },
  },
}
