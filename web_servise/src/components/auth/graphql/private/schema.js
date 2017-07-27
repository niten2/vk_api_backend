export const typeDefs = `
  type Query {
    user: User
  }

  type User {
    name: String
    email: String
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
