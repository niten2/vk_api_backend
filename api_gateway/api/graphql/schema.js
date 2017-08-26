import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from './resolvers'
import { ApiQuery, ApiMutation, ApiModels, ApiInputs } from './services/api/schema'
import { CrmQuery, CrmMutation, CrmModels, CrmInputs } from './services/crm/schema'
import { SharedRootQuery, SharedModels, SharedInputs } from './services/shared/schema'

const RootQuery = SharedRootQuery + ApiQuery + CrmQuery
const RootMutation = ApiMutation + CrmMutation
const Models = SharedModels + ApiModels + CrmModels
const Inputs = SharedInputs + ApiInputs + CrmInputs

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
