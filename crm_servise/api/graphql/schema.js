import {
  makeExecutableSchema,
} from 'graphql-tools'

import { resolvers } from './resolvers'

const typeDefs = `

  schema {
    query: RootQuery
    mutation: RootMutation
  }

  # Root
  type RootQuery {
    clients(pagination: PaginationInput): [Client]!
    client(id: ID!): Client

    statuses: [Status]
    status(id: ID!): Status

    meta(name: String): Meta
  }

  type RootMutation {
    createClient(input: ClientInput!): Client
    updateClient(input: ClientInput!): Client
    deleteClient(input: IdInput!): Client

    createStatus(input: StatusInput!): Status
    updateStatus(input: StatusInput!): Status
    deleteStatus(input: IdInput!): Status
  }

  type Client {
    id: ID
    name: String
    number: String
    phone: String
    note: String
    date_birth: String
    status_id: String
    status: Status
  }

  type Status {
    id: ID
    name: String
  }

  type Meta {
    count: Int!
  }


  # NOTE Inputs

  input ClientInput {
    name: String
    number: String
    phone: String
    note: String
    date_birth: String
    status_id: String
  }

  input StatusInput {
    name: String
    number: String
    phone: String
    note: String
    date_birth: String
    status_id: String
  }

  input IdInput {
    id: ID!
  }

  input PaginationInput {
    limit: Int
    offset: Int
  }










`

export const schema = makeExecutableSchema({ typeDefs, resolvers })
