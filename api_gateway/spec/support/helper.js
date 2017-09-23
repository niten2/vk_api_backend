import { createApolloFetch } from 'apollo-fetch'
import settings from 'config/settings'
import { createJwt } from "api/services/jwt"

export const graphqlQuery = (query, variables, user) => {

  const uri = `http://localhost:${settings.port}/v1`
  const apolloFetch = createApolloFetch({ uri })

  if (user) {
    apolloFetch.use(({ request, options }, next) => {
      if (!options.headers) {
        options.headers = {}
      }
      options.headers['authorization'] = `Token ${createJwt(user)}`

      next()
    })
  }

  return apolloFetch({ query, variables })
}

