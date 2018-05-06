// export const ApiQuery = `
//   user: User
//   settings(pagination: PaginationInput): [Setting]!
// `

// export const ApiMutation = `
//   createUser(input: UserInput!): User
//   updateUser(input: UserInput!): User

//   createJwtToken(input: JwtTokenInput!): JwtToken

//   createSetting(input: SettingInput!): Setting
//   updateSetting(input: SettingInput!): Setting
// `

// export const ApiModels = `
//   type JwtToken {
//     token: String
//   }

//   type User {
//     id: ID
//     name: String
//     email: String @isUnique
//     password: String
//     createdAt: String
//     updatedAt: String
//   }

//   type Setting {
//     id: ID
//     name: String
//     value: String
//     createdAt: String
//     updatedAt: String
//   }
// `

// export const ApiInputs = `
//   input SettingInput {
//     name: String
//     value: String
//   }

//   input UserInput {
//     name: String
//     email: String @isUnique
//     password: String
//   }

//   input JwtTokenInput {
//     email: String
//     password: String
//   }
// `
