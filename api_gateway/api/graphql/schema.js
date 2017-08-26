import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from './resolvers'
import { ApiQuery, ApiMutation, ApiModels, ApiInputs } from './services/api/schema'
import { SharedRootQuery, SharedModels, SharedInputs } from './services/shared/schema'

const RootQuery = SharedRootQuery + ApiQuery
const RootMutation = ApiMutation
const Models = SharedModels + ApiModels
const Inputs = SharedInputs + ApiInputs

const typeDefs = `
  schema {
    query: RootQuery
    mutation: RootMutation
  }

  type RootQuery { ${RootQuery} }
  type RootMutation { ${RootMutation} }
  ${Inputs}
  ${Models}
`

export default makeExecutableSchema({ typeDefs, resolvers })
