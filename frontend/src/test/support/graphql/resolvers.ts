import { fakeUser, fakeClient, fakeTerritory, fakeLoan } from "src/test/support/seed"

const Query = {
  user: (_: any, args: any, ctx: any) => {
    return fakeUser
  },

  users: (_: any, args: any, ctx: any) => {
    return [fakeUser]
  },

  me: (_: any, args: any, ctx: any) => {
    return fakeUser
  },

  client: (root: any, args: any, ctx: any) => {
    return fakeClient
  },

  clients: (root: any, args: any, ctx: any) => {
    return [fakeClient]
  },

  territories: (root: any, args: any, ctx: any) => {
    return [fakeTerritory]
  },

  loan: (root: any, args: any, ctx: any) => {
    return fakeLoan
  },

  loans: (root: any, args: any, ctx: any) => {
    return [fakeLoan]
  },
}

const Mutation = {
  createToken: (_: any, args: any): any => {
    return {
      user: fakeUser,
      token: "token",
    }
  },

  calculateLoan: async (root: any, args: any, ctx: any) => {
    return {
      total: args.input.sum
    }
  },
}

export default {
  Query: () => (Query),
  Mutation: () => (Mutation),
}
