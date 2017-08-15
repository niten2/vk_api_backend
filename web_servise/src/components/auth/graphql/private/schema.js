export const typeDefs = `

  type User {
    id: ID
    name: String
    email: String @isUnique
    password: String
  }

  type Setting {
    id: ID
    name: String
    value: String
    createdAt: String
    updatedAt: String
  }

  type Meta {
    count: Int!
  }

  # NOTE Inputs
  input SettingInput {
    name: String
    value: String
  }

  input UserInput {
    name: String
    email: String @isUnique
    password: String
  }

  input IdInput {
    id: ID!
  }

  input PaginationInput {
    limit: Int
    offset: Int
  }

`
