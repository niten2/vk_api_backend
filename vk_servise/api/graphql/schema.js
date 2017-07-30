import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from './resolvers'

const typeDefs = `
  schema {
    query: RootQuery
    mutation: RootMutation
  }

  # Root
  type RootQuery {
    persons: [Person]
    tags: [Tag]
    groups: [Group]
  }

  type RootMutation {
    createPerson(input: PersonInput!): Person
    updatePerson(input: PersonInput!): Person
    deletePerson(input: IdInput!): Person
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
  }

  type Tag {
    id: ID
    name: String
  }


  # Inputs

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

  input IdInput {
    id: ID!
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

