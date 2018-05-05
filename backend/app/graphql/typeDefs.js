const query = `
  type Query {
    me: User
    vkPersons: [VkPerson]
  }
`

const mutation = `
  type Mutation {
    createUser(input: UserCreateInput!): Token
    createToken(input: TokenCreateInput!): Token

    updateMe(input: MeUpdateInput!): User
  }
`

const models = `
  type User {
    id: ID

    name: String
    email: String

    createdAt: String
    updatedAt: String
  }

  type VkPerson {
    id: ID

    uid: String
    isFriend: String

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
    name: String
    email: String!
    password: String!
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
