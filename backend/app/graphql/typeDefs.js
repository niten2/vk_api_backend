const query = `
  type Query {
    me: User
  }
`

const mutation = `
  type Mutation {
    createUser(input: UserCreateInput!): User

    updateMe(input: MeUpdateInput!): User

    createToken(input: TokenCreateInput!): Token
  }
`

const models = `
  type User {
    id: ID

    name: String
    email: String

    role: String

    createdAt: String
    updatedAt: String
  }

  type Token {
    token: String!
    user: User
  }

  type Total {
    total: Float!
  }
`

const inputs = `
  input IdInput {
    id: ID!
  }

  input UserCreateInput {
    name: String!
    email: String!
    login: String!
    password: String!

    createdAt: String
    updatedAt: String
  }

  input MeUpdateInput {
    name: String
    email: String
    login: String

    password: String
  }

  input TokenCreateInput {
    email: String!
    password: String!
  }
`

const typeDefs = query + mutation + models + inputs

export default typeDefs
