import {
  makeExecutableSchema,
} from 'graphql-tools'

import { resolvers } from './resolvers'

const typeDefs = `
  type Query {
    user(id: ID!): User
    users: [User]
  }

  type User {
    id: ID!
    email: String
    password: String
  }

  type JwtToken {
    email: String
    password: String
    token: String
  }

  type Mutation {

    JwtTokenCreate(
      email: String!
      password: String!
      token: String
    ): JwtToken

    UserCreate(
      email: String!
      password: String!
    ): User

  }
`

export const schema = makeExecutableSchema({ typeDefs, resolvers })
