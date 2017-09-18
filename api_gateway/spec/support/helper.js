import { createApolloFetch } from 'apollo-fetch'
import settings from 'config/settings'

const uri = `http://localhost:${settings.port}/v1`
const apolloFetch = createApolloFetch({ uri })

export const graphqlQuery = (query) => {
  return apolloFetch({ query })
}
