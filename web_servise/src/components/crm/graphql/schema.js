export const typeDefs = `

  type Query {
    clients: [ Client ]
    client: Client

    statuses: [ Status ]
    status(id: ID!): Status
  }

  type Status {
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
    status_id: String
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

    statusCreate(
      name: String
    ): Status

    statusUpdate(
      id: ID!
      name: String
    ): Status

    statusDelete(
      id: ID!
    ): Status

  }
`
