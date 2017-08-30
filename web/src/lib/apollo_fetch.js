// import { LayoutAuthPrivate } from "lib/layout_helper"
import { createApolloFetch } from 'apollo-fetch'
import settings from "lib/settings"
import authProvider from "lib/auth_provider"

const middleware = (req, next) => {
  if (!req.options.headers) {
    req.options.headers = {}
  }
  req.options.headers.authorization = authProvider.fetchToken()
  next()
}

const apolloFetchAuthPrivate = createApolloFetch({ uri: settings.uriAuthServisePrivate })

apolloFetchAuthPrivate.use(middleware)

export {
  apolloFetchAuthPrivate,
}
