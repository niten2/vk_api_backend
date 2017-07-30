export const typeDefs = `
  type Query {
    persons: [ Person ]
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
