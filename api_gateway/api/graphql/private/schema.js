import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from './resolvers'

const typeDefs = `
  schema {
    query: RootQuery
    mutation: RootMutation
  }

  type RootQuery {
    user: User
    settings(pagination: PaginationInput): [Setting]!
    meta(name: String!): Meta
  }

  # Models
  type User {
    id: ID
    name: String
    email: String @isUnique
    password: String
  }

  type Setting {
    id: ID
    name: String
    value: String
    createdAt: String
    updatedAt: String
  }

  type Meta {
    count: Int!
  }

  # NOTE Inputs
  input SettingInput {
    name: String
    value: String
  }

  input UserInput {
    name: String
    email: String @isUnique
    password: String
  }

  input IdInput {
    id: ID!
  }

  input PaginationInput {
    limit: Int
    offset: Int
  }

  type RootMutation {
    updateUser(input: UserInput!): User
    createSetting(input: SettingInput!): Setting
    updateSetting(input: SettingInput!): Setting
  }

`

const schema = makeExecutableSchema({ typeDefs, resolvers })
export default schema
