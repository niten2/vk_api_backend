// import { apolloFetch } from "lib/layout_helper"
import settings from "config/settings"
// import authProvider from "lib/auth_provider"
import { createApolloFetch } from 'apollo-fetch'

const addToken = (req, next) => {
  if (!req.options.headers) {
    req.options.headers = {}
  }

  req.options.headers.user_id = req.request.user_id
  req.request = req.request.body
  next()
}

export const VkFetch = createApolloFetch({ uri: settings.vkUri })

VkFetch.use(addToken)
