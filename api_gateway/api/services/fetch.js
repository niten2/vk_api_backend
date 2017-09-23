import settings from "config/settings"
import { createApolloFetch } from 'apollo-fetch'

const addToken = (req, next) => {
  if (!req.options.headers) {
    req.options.headers = {}
  }

  if (req.request.user_id) {
    req.options.headers.user_id = req.request.user_id
  }

  if (req.request.body) {
    req.request = req.request.body
  }

  next()
}

export const VkFetch = createApolloFetch({ uri: settings.vkUri }).use(addToken)
