// const models = `
//   type User {
//     id: ID
//     name: String
//     email: String @isUnique
//     password: String
//   }

//   type Setting {
//     id: ID
//     name: String
//     value: String
//     createdAt: String
//     updatedAt: String
//   }

//   type Meta {
//     count: Int!
//   }

//   type JwtToken {
//     token: String
//   }

// `

// const inputs = `
//   input IdInput {
//     id: ID!
//   }

//   input SettingInput {
//     name: String
//     value: String
//   }

//   input UserInput {
//     name: String
//     email: String @isUnique
//     password: String
//   }

//   input PaginationInput {
//     limit: Int
//     offset: Int
//   }

//   input JwtTokenInput {
//     email: String
//     password: String
//   }

// `

// export const typeDefs = `
//   ${models}
//   ${inputs}
// `
