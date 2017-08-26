import { createJwt } from "api/services/jwt"
import { mergeAll, merge } from "ramda"

import { ApiQuery, ApiMutation } from "./services/api/resolvers"
import { SharedQuery } from "./services/shared/resolvers"

const RootQuery = mergeAll([
  {},
  ApiQuery,
  SharedQuery,
])

const RootMutation = mergeAll([
  {},
  ApiMutation
])

export const resolvers = {
  RootQuery,
  RootMutation,
}
