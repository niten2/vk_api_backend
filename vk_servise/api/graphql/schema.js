import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from './resolvers'

const typeDefs = `
  schema {
    query: RootQuery
    mutation: RootMutation
    subscription: RootSubscription
  }

  # Root
  type RootQuery {
    persons: [Person]
    groups: [Group]
    tags(filter: TagFilterInput, skip: Int, first: Int): [Tag!]!
  }

  type RootMutation {
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

  # Models
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

  # NOTE Inputs

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






  type RootSubscription {
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

const schema = makeExecutableSchema({ typeDefs, resolvers })
export default schema

//   type Group {
//     id: ID
//     name: String
//   }

//   type Tag {
//     id: ID
//     name: String
//   }

//   type Mutation {

//     createPerson(
//       uid: String
//       first_name: String
//       last_name: String
//       followers_count: String
//       sex: String
//       city: String
//       bdate: String
//       crop_photo_url: String
//       status: String
//       createdAt: String
//       updatedAt: String
//     ): Person

//     deletePerson(
//       id: ID!
//     ): Person

//   }

