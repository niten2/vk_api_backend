import {
  makeExecutableSchema,
} from 'graphql-tools'

import { resolvers } from './resolvers'

const typeDefs = `
  type Query {
    clients: [Client]
    client(id: ID!): Client

    status(id: ID!): Status
    statuses: [Status]
  }

  type Client {
    id: ID!
    name: String
    number: String
    phone: String
    note: String
    date_birth: String
  }

  type Status {
    id: ID!
    name: String
  }

  type Mutation {
    clientCreate(
      name: String
      number: String
      phone: String
      note: String
      date_birth: String
    ): Client

    clientUpdate(
      id: ID!
      name: String
      number: String
      phone: String
      note: String
      date_birth: String
    ): Client

    clientDelete(
      id: ID!
    ): Client

    statusCreate(
      name: String
    ): Status

    statusUpdate(
      id: ID!
      name: String
    ): Status

    statusDelete(
      id: ID!
    ): Status


  }
`

export const schema = makeExecutableSchema({ typeDefs, resolvers })
