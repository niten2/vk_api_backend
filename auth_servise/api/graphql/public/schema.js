import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from './resolvers'

const typeDefs = `
  type Query {
    users: [User]
  }

  type User {
    id: ID
    name: String
    email: String @isUnique
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
  }
`

const schema = makeExecutableSchema({ typeDefs, resolvers })

export default schema
