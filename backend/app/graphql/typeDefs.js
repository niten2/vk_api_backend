const query = `
  type Query {
    me: User
    settings: [Setting]
    vkPersons(input: VkPersonsInput): VkPersonWithMeta
  }
`

const mutation = `
  type Mutation {

    createToken(input: TokenCreateInput!): UserWithToken
    createUser(input: UserCreateInput!): UserWithToken
    createVkFriends(input: CreateVkFriendsInput!): VkPersonWithError

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
    isFriend: Boolean
    user_id: Int

    createdAt: String
    updatedAt: String
  }

  type UserWithToken {
    user: User
    token: String
  }

  type VkPersonWithMeta {
    vkPersons: [VkPerson]
    totalCount: Int
  }

  type VkPersonWithError {
    persons: [VkPerson]
    errors: [VkPersonError]
  }

  type VkPersonError {
    uid: String
    message: String
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
