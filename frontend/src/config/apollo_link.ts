import { contains } from "ramda"
import { setContext } from "apollo-link-context"
import { onError } from 'apollo-link-error'
import { createHttpLink } from "apollo-link-http"
import { InMemoryCache } from "apollo-cache-inmemory"
import { WebSocketLink } from 'apollo-link-ws'

import AuthProvider from "src/config/auth_provider"
import settings from "src/config/settings"
import history from 'src/config/history'

import { split } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { getMainDefinition } from 'apollo-utilities'

const httpLink = createHttpLink({
  uri: settings.backend_url,
})

const wsLink = new WebSocketLink({
  uri: settings.ws_url,

  options: {
    reconnect: true,
    connectionParams: () => {
      return {
        // authorization: token,
        Authorization: "11111111111",
        // Authorization: AuthProvider.fetchToken(),
      }
    },
  },
})

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      Authorization: AuthProvider.fetchToken(),
    }
  }
})

const errorLink = onError(({ networkError, graphQLErrors, response }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) => {
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)

      const messages = [
        "access denied",
        "user not found",
        "token not valid",
        "access denied: user not found",
        "access denied: jwt token not valid",
      ]

      if (contains(message, messages)) {
        AuthProvider.removeToken()
        history.push("/")
      }
    })
  }

  if (networkError) {
    console.log(`[Network error]: ${networkError}`)
  }
})


let link = split(
  ({ query }) => {
    const options: any = getMainDefinition(query)
    return options.kind === 'OperationDefinition' && options.operation === 'subscription'
  },
  wsLink,
  httpLink,
)

const mainLink = authLink.concat(link)

export default mainLink
