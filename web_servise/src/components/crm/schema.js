export const typeDefs = `

  type Channel {
    id: ID!
    name: String
  }

  type Client {
    id: ID!
    name: String
  }

  type Query {
    channels: [Channel]
    clients: [Client]
  }

  type Mutation {
    addChannel(name: String!): Channel
    addClient(name: String!): Client
  }
`
