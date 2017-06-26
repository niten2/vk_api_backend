import {
  makeExecutableSchema,
} from 'graphql-tools'

import { resolvers } from './resolvers'

const typeDefs = `

  type Client {
    id: ID!
    name: String
    number: String
    phone: String
    note: String
    date_birth: String
  }

  type Channel {
    id: ID!
    name: String
  }

  type Query {
    channels: [Channel]
    channel(id: ID!): Channel

    clients: [Client]
  }

  input MessageInput{
    channelId: ID!
    text: String
  }

  type Message {
    id: ID!
    text: String
  }

  type Mutation {
    addChannel(name: String!): Channel
    addMessage(message: MessageInput!): Message

    addClient(name: String!): Channel
  }
`

export const schema = makeExecutableSchema({ typeDefs, resolvers })
