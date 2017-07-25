import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from './resolvers'

const typeDefs = `
  type Query {
    user: User
    users: [User]
  }

  type User {
    id: ID
    name: String
    email: String
    password: String
  }

  type JwtToken {
    token: String
  }

  type Mutation {

    JwtTokenCreate(
      email: String!
      password: String!
    ): JwtToken

    UserCreate(
      email: String!
      password: String!
    ): User

    UserUpdate(
      name: String
      email: String
      password: String
    ): User

  }
`

export const schema = makeExecutableSchema({ typeDefs, resolvers })
