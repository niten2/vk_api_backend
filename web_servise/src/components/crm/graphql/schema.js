export const typeDefs = `

  type Client {
    id: ID!
    name: String
    number: String
    phone: String
    note: String
    date_birth: String
  }

  type Query {
    clients: [ Client ]
    client(id: ID!): Client
  }

  type Mutation {

    clientCreate(
      name: String
      number: String
      phone: String
      note: String
      date_birth: String
    ): Client

    clientUpdate(
      id: ID!
      name: String
      number: String
      phone: String
      note: String
      date_birth: String
    ): Client

    clientDelete(
      id: ID!
    ): Client

  }
`
