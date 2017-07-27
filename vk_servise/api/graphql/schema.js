import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from './resolvers'

const typeDefs = `
  type Query {
    persons: [Person]
    tags: [Tag]
    groups: [Group]
  }

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
`

const schema = makeExecutableSchema({ typeDefs, resolvers })
export default schema

//   type Mutation {

//   }
