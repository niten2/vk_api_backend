const query = `
  type Query {
    users(input: UsersInput): [User]
    user(id: ID!): User
    me: User

    clients(id: ID): [Client]
    client(id: ID): Client

    territories: [Territory]

    loans(input: LoansInput): [Loan]
    loan(id: ID!): Loan
  }
`

const mutation = `
  type Mutation {
    createUser(input: UserCreateInput!): User
    updateUser(input: UserUpdateInput!): User
    deleteUser(input: IdInput!): User

    updateMe(input: MeUpdateInput!): User

    createClient(input: ClientCreateInput!): Client
    updateClient(input: ClientUpdateInput!): Client
    deleteClient(input: IdInput!): Client

    createToken(input: TokenCreateInput!): Token

    createLoan(input: LoanCreateInput!): Loan
    updateLoan(input: LoanUpdateInput!): Loan
    calculateLoan(input: LoanCalculateInput!): Total
  }
`

const models = `
  type User {
    id: ID

    full_name: String
    email: String
    login: String
    password: String
    role: String
    phone: String
    territory: String
    blocked: Boolean

    createdAt: String
    updatedAt: String
  }

  type Client {
    id: ID
    full_name: String
    email: String
    passport: String
    phone: String
    territory: Territory
    user: String
    mark_as_deleted: Boolean
    total_sum_loans: Int

    loans: [Loan]

    createdAt: String
    updatedAt: String
  }

  type Token {
    token: String!
    user: User
  }

  type Loan {
    id: ID!
    date_start: String!
    date_end: String!
    client: Client!
    sum: Int!
    total: Float

    createdAt: String
    updatedAt: String
  }

  type Territory {
    id: ID!
    name: String!
    rate: Float!

    createdAt: String
    updatedAt: String
  }

  type Total {
    total: Float!
  }
`

const inputs = `
  input IdInput {
    id: ID!
  }

  input UserCreateInput {
    full_name: String!
    email: String!
    login: String!
    password: String!
    role: String
    phone: String!
    territory: String
    createdAt: String
    updatedAt: String
  }

  input UserUpdateInput {
    id: ID!
    full_name: String
    email: String
    login: String
    password: String
    role: String
    phone: String
    territory: String
    blocked: Boolean
  }

  input MeUpdateInput {
    full_name: String
    email: String
    login: String
    password: String
    role: String
    phone: String
    territory: String
  }

  input ClientCreateInput {
    full_name: String!
    passport: String!
    phone: String!
    email: String!
  }

  input ClientUpdateInput {
    id: ID!
    full_name: String
    email: String
    passport: String
    phone: String
    territory: String
    user: String
    mark_as_deleted: Boolean
  }

  input TokenCreateInput {
    login: String!
    password: String!
  }

  input LoanCreateInput {
    sum: Int!
    date_start: String!
    date_end: String!
    client: String!
  }

  input LoanCalculateInput {
    sum: Int!
    date_start: String!
    date_end: String!
    client: String!
  }

  input LoanUpdateInput {
    id: ID!
    sum: Int
    date_start: String
    date_end: String
    client: String
  }

  input LoansInput {
    client: String
  }

  input UsersInput {
    role: String
  }
`

const typeDefs = query + mutation + models + inputs

export default typeDefs
