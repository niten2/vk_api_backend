const query = `
  type Query {
    me: User
    settings: [Setting]
    vkPersons(input: VkPersonsInput): [VkPerson]
  }
`

const mutation = `
  type Mutation {
    createUser(input: UserCreateInput!): Token
    createToken(input: TokenCreateInput!): Token

    createVkFriends(input: CreateVkFriendsInput!): Message

    updateMe(input: MeUpdateInput!): User
  }
`

const models = `
  type User {
    id: ID

    name: String
    email: String
    vk_token: String
    vk_active: Boolean

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

  type Setting {
    name: String
    value: String
  }

  type Total {
    total: Float!
  }

  type Message {
    message: String!
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
    password: String

    vk_token: String
    vk_active: Boolean
  }

  input TokenCreateInput {
    email: String!
    password: String!
  }

  input VkPersonsInput {
    filter: VkPersonsInputFilter
  }

  input VkPersonsInputFilter {
    addFriendAt: String
  }

  input CreateVkFriendsInput {
    ids: String!
  }
`

const typeDefs = query + mutation + models + inputs

export default typeDefs
