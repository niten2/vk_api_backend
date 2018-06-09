export default `
  type Query {
    me: User
    settings: [Setting]
    vkPersons(input: VkPersonsInput): VkPersonWithMeta

    logs: [Log]
    testLog: Message
  }

  type Mutation {
    createToken(input: TokenCreateInput!): UserWithToken
    createUser(input: UserCreateInput!): UserWithToken
    createVkFriends(input: CreateVkFriendsInput!): VkPersonWithError

    setInfoVkPersons: Message

    updateMe(input: MeUpdateInput!): User
  }

  type Subscription {
    subscribeToLog(input: SubscribeToLogInput!): Log
    subscribeToSetInfoVkPersons: Message
  }

  ### INPUT ###

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
    cursor: String
    limit: Int
  }

  input VkPersonsInputFilter {
    addFriendAt: String
  }

  input CreateVkFriendsInput {
    ids: String!
  }

  input SubscribeToLogInput {
    userId: String!
  }

  ### MODELS ###

  type User {
    id: ID

    name: String
    email: String
    vk_token: String
    vk_active: Boolean

    createdAt: String
    updatedAt: String
  }

  type Log {
    id: ID
    name: String
  }

  type VkPerson {
    id: ID

    uid: String
    isFriend: Boolean
    user_id: Int

    first_name: String
    last_name: String
    deactivated: Boolean

    createdAt: String
    updatedAt: String
  }

  type UserWithToken {
    user: User
    token: String
  }

  type VkPersonWithMeta {
    vkPersons: [VkPerson]
    cursor: String
    count: Int
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

  ### SCHEMA ###

  schema {
    query: Query
    mutation: Mutation
    subscription: Subscription
  }
`
