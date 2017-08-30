import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from './resolvers'
import { ApiQuery, ApiMutation, ApiModels, ApiInputs } from './services/api/schema'
import { CrmQuery, CrmMutation, CrmModels, CrmInputs } from './services/crm/schema'
import { VkQuery, VkMutation, VkModels, VkInputs } from './services/vk/schema'
import { SharedRootQuery, SharedModels, SharedInputs } from './services/shared/schema'

const Query = SharedRootQuery + ApiQuery + CrmQuery + VkQuery
const Mutation = ApiMutation + CrmMutation + VkMutation
const Models = SharedModels + ApiModels + CrmModels + VkModels
const Inputs = SharedInputs + ApiInputs + CrmInputs + VkInputs

const typeDefs = `
  type Query { ${Query} }
  type Mutation { ${Mutation} }
  ${Models}
  ${Inputs}
`

export default makeExecutableSchema({ typeDefs, resolvers })
