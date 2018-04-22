// import { apolloFetch } from "lib/layout_helper"
import settings from "lib/settings"
import { createApolloFetch } from 'apollo-fetch'
import authProvider from "lib/auth_provider"

const addToken = (req, next) => {
  if (!req.options.headers) {
    req.options.headers = {}
  }
  req.options.headers.authorization = authProvider.fetchToken()
  next()
}

export const apolloFetch = createApolloFetch({ uri: settings.urlBackend })

apolloFetch.use(addToken)
