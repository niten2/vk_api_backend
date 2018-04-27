import { mergeAll } from "ramda"

// import { ApiQuery, ApiMutation } from "./services/api/resolvers"
// import { CrmQuery, CrmMutation } from "./services/crm/resolvers"
// import { SharedQuery } from "./services/shared/resolvers"
// import { VkQuery, VkMutation } from "./services/vk/resolvers"

const Query = mergeAll([
  // SharedQuery,
  // ApiQuery,
  // CrmQuery,
  // VkQuery,
])

const Mutation = mergeAll([
  // ApiMutation,
  // CrmMutation,
  // VkMutation,
])

export const resolvers = { Query, Mutation }
