export const SharedRootQuery = `
  meta(input: MetaInput!): Meta
`

// export const SharedRootMutation = `
//   # public
//   createUser(input: UserInput!): User
//   createJwtToken(input: JwtTokenInput!): JwtToken

//   # pirvate
//   updateUser(input: UserInput!): User
//   createSetting(input: SettingInput!): Setting
//   updateSetting(input: SettingInput!): Setting
// `

export const SharedModels = `
  type Meta {
    count: Count
  }

  type Count {
    User: Int
    Setting: Int
  }
`

export const SharedInputs = `
  input MetaInput {
    names: [String]
  }

  input IdInput {
    id: ID!
  }

  input PaginationInput {
    limit: Int
    offset: Int
  }
`
