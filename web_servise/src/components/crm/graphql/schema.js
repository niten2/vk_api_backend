export const typeDefs = `

  type Client {
    id: ID
    name: String
    number: String
    phone: String
    note: String
    date_birth: String
    status_id: String
    status: Status
  }

  type Status {
    id: ID
    name: String
  }

  type Meta {
    count: Int!
  }

  # NOTE Inputs

  input ClientInput {
    name: String
    number: String
    phone: String
    note: String
    date_birth: String
    status_id: String
  }

  input StatusInput {
    name: String
  }

  input IdInput {
    id: ID!
  }

  input PaginationInput {
    limit: Int
    offset: Int
  }

`
