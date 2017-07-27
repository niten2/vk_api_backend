import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from './resolvers'

const typeDefs = `
  type Query {
    user: User
  }

  type User {
    id: ID
    name: String
    email: String @isUnique
    password: String
  }

  type Mutation {

    UserUpdate(
      name: String
      email: String
      password: String
    ): User

  }
`

const schema = makeExecutableSchema({ typeDefs, resolvers })
export default schema
