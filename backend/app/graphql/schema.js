import { makeExecutableSchema } from 'graphql-tools'
import resolvers from 'app/graphql/resolvers'

const query = `
  type Query {
    users: [User]
    user(id: ID!): User
    me: User
  }
`

const mutation = `
  type Mutation {
    createUser(input: UserCreateInput!): User
    updateUser(input: UserUpdateInput!): User
    deleteUser(input: IdInput!): User

    updateMe(input: MeUpdateInput!): User

    createToken(input: TokenCreateInput!): Token

  }
`

const models = `
  type User {
    id: ID

    full_name: String
    email: String
    password: String

    createdAt: String
    updatedAt: String
  }

  type Token {
    token: String!
    user: User
  }

`

const inputs = `
  input IdInput {
    id: ID!
  }

  input UserCreateInput {
    full_name: String!
    email: String!
    password: String!
  }

  input UserUpdateInput {
    id: ID!
    full_name: String!
    email: String!
    password: String!
  }

  input MeUpdateInput {
    full_name: String!
    email: String!
    password: String!
  }

  input TokenCreateInput {
    email: String!
    password: String!
  }
`

const typeDefs = query + mutation + models + inputs

export default makeExecutableSchema({ typeDefs, resolvers })
