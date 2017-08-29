export const SharedRootQuery = `
  meta(input: MetaInput!): Meta
`

export const SharedModels = `
  type Meta {
    count: Int
  }
`

export const SharedInputs = `
  input MetaInput {
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
