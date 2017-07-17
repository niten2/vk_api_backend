export const typeDefs = `
  type Query {
    user(id: ID!): User
  }

  type User {
    id: ID!
    email: String
    password: String
  }

  type JwtToken {
    token: String
  }

  type Mutation {

    JwtTokenCreate(
      id: ID!
      email: String!
      password: String!
    ): JwtToken

    UserCreate(
      id: ID!
      email: String!
      password: String!
    ): User

  }
`
