import settings from "config/settings"
import { createApolloFetch } from 'apollo-fetch'

const addToken = ({ request, options }, next) => {
  if (!options.headers) {
    options.headers = {}
  }

  if (request.user_id) {
    options.headers["user_id"] = `${request.user_id}`
  }

  next()
}

export const VkFetch = (context) => {
  const fetch = createApolloFetch({ uri: settings.vkUri }).use(addToken)
  let request = Object.assign({}, context.body, { user_id: context.user_id })
  return fetch(request)
}
