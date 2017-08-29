import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from './resolvers'

const query = `
  type Query {
    persons(pagination: PaginationInput): [Person]!
    groups(pagination: PaginationInput): [Group]!
    tags(filter: TagFilterInput, skip: Int, first: Int): [Tag!]!
    meta(name: String!): Meta
  }
`
const mutation = `
  type Mutation {
    createPerson(input: PersonInput!): Person
    updatePerson(input: PersonInput!): Person
    deletePerson(input: IdInput!): Person

    createGroup(input: GroupInput!): Group
    updateGroup(input: GroupInput!): Group
    deleteGroup(input: IdInput!): Group

    createTag(input: TagInput!): Tag
    updateTag(input: TagInput!): Tag
    deleteTag(input: IdInput!): Tag
  }
`

const models = `
  type Person {
    id: ID

    uid: String
    first_name: String
    last_name: String
    followers_count: String
    sex: String
    city: String
    bdate: String
    crop_photo_url: String
    status: String
    user_id: Int

    createdAt: String
    updatedAt: String
  }

  type Group {
    id: ID
    name: String
    members_count: String
    note: String
    createdAt: String
    updatedAt: String
  }

  type Tag {
    id: ID
    name: String
    status: String
    kind: String
  }

  type Meta {
    count: Int!
  }
`

const inputs = `
  input PersonInput {
    uid: String
    first_name: String
    last_name: String
    followers_count: String
    sex: String
    city: String
    bdate: String
    crop_photo_url: String
    status: String
  }

  input GroupInput {
    name: String
    members_count: String
    note: String
  }

  input TagInput {
    name: String
    status: String
    kind: String
  }

  input TagFilterInput {
    OR: [TagFilterInput!]
    name: String
    status: String
  }

  input IdInput {
    id: ID!
  }

  input PaginationInput {
    limit: Int
    offset: Int
  }
`

const subscription = `
  type Subscription {
    Group(filter: GroupSubscriptionFilter): GroupSubscriptionPayload
  }

  input GroupSubscriptionFilter {
    mutation_in: [_ModelMutationType!]
  }

  type GroupSubscriptionPayload {
    mutation: _ModelMutationType!
    node: Group
  }

  enum _ModelMutationType {
    CREATED
    UPDATED
    DELETED
  }
`

const typeDefs = query + mutation + models + inputs + subscription
export default makeExecutableSchema({ typeDefs, resolvers })
