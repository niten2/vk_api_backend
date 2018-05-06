import { ApolloClient } from "apollo-client"
import { setContext } from "apollo-link-context"
import { onError } from 'apollo-link-error'
import { createHttpLink } from "apollo-link-http"
import { InMemoryCache } from "apollo-cache-inmemory"

import AuthProvider from "src/config/auth_provider"
import settings from "src/config/settings"
import history from 'src/config/history'

const httpLink = createHttpLink({
  uri: settings.backend_url,
})

const errorLink = onError(({ networkError, graphQLErrors, response }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) => {
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)

      if (message === "user not found" || message === "token not valid") {
        AuthProvider.removeToken()
        history.push("/")
      }
    })
  }

  if (networkError) {
    console.log(`[Network error]: ${networkError}`)
  }
})

const middlewareLink = setContext(() => ({
  headers: {
    Authorization: AuthProvider.fetchToken(),
  }
}))

const link = middlewareLink.concat(errorLink.concat(httpLink))

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
})
