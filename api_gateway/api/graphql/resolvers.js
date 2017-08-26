import { createJwt } from "api/services/jwt"
import { mergeAll, merge } from "ramda"

import { ApiQuery, ApiMutation } from "./services/api/resolvers"
import { CrmQuery, CrmMutation } from "./services/crm/resolvers"
import { SharedQuery } from "./services/shared/resolvers"

const RootQuery = mergeAll([
  SharedQuery,
  ApiQuery,
  CrmQuery,
])

const RootMutation = mergeAll([
  ApiMutation,
  CrmMutation,
])

export const resolvers = {
  RootQuery,
  RootMutation,
}
