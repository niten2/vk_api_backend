export const typeDefs = `
  type Query {
    user: User
  }

  type User {
    name: String
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

    UserUpdate(
      name: String
      email: String
      password: String
    ): User

  }
`
