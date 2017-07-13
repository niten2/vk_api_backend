export const typeDefs = `

  type Channel {
    id: ID!
    name: String
  }

  type Client {
    id: ID!
    name: String
    number: String
    phone: String
    note: String
    date_birth: String
  }

  type Query {
    channels: [Channel]
    clients: [Client]
  }

  type Mutation {
    addChannel(name: String!): Channel

    addClient(name: String!,
      number: String,
      phone: String,
      note: String,
      date_birth: String,
    ): Client

    ClientDelete(id: ID!): Client
  }
`
