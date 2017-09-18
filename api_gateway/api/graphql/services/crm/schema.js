export const CrmQuery = `
  clients(pagination: PaginationInput): [Client]
  client(id: ID!): Client

  statuses(pagination: PaginationInput): [Status]
  status(id: ID!): Status
`

export const CrmMutation = `
  createClient(input: ClientInput!): Client
  updateClient(id: ID!, input: ClientInput!): Client
  deleteClient(input: IdInput!): Client

  createStatus(input: StatusInput!): Status
  updateStatus(id: ID!, input: StatusInput!): Status
  deleteStatus(input: IdInput!): Status
`

export const CrmModels = `
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
`

export const CrmInputs = `
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
    number: String
    phone: String
    note: String
    date_birth: String
    status_id: String
  }
`
