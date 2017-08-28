import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from './resolvers'

const query = `
  type Query {
    clients(pagination: PaginationInput): [Client]
    client(id: ID!): Client

    statuses(pagination: PaginationInput): [Status]
    status(id: ID!): Status

    meta(input: MetaInput!): Meta
  }
`

const mutation = `
  type Mutation {
    createClient(input: ClientInput!): Client
    updateClient(id: ID!, input: ClientInput!): Client
    deleteClient(input: IdInput!): Client

    createStatus(input: StatusInput!): Status
    updateStatus(id: ID!, input: StatusInput!): Status
    deleteStatus(input: IdInput!): Status
  }
`

const models = `
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
    count: Count
  }

  type Count {
    Client: Int
    Status: Int
  }
`

const inputs = `
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

  input MetaInput {
    names: [String]
  }

  input IdInput {
    id: ID!
  }

  input PaginationInput {
    limit: Int
    offset: Int
  }
`

const typeDefs = query + mutation + models + inputs

export const schema = makeExecutableSchema({ typeDefs, resolvers })
