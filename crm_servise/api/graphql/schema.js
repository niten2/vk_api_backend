import {
  makeExecutableSchema,
} from 'graphql-tools'

import { resolvers } from './resolvers'

const typeDefs = `
  type Query {
    clients(offset: Int, limit: Int): [Client]
    client(id: ID!): Client

    status(id: ID!): Status
    statuses: [Status]

    meta(name: String): Meta
  }

  type Client {
    id: ID!
    name: String
    number: String
    phone: String
    note: String
    date_birth: String
    status_id: String
    status: Status
  }

  type Meta {
    count: Int
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
      status_id: String
    ): Client

    clientUpdate(
      id: ID!
      name: String
      number: String
      phone: String
      note: String
      date_birth: String
      status_id: String
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
