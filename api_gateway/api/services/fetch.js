import settings from "config/settings"
import { createApolloFetch } from 'apollo-fetch'

const addUserId = ({ request, options }, next) => {
  if (!options.headers) {
    options.headers = {}
  }

  if (request.user_id) {
    options.headers["user_id"] = `${request.user_id}`
  }

  next()
}

const fetchVk = createApolloFetch({ uri: settings.vkUri }).use(addUserId)
const fetchCrm = createApolloFetch({ uri: settings.crmUri }).use(addUserId)

export const redirectVk = async (context) => {
  console.log(context)
  let args = Object.assign({}, context.body, { user_id: context.user_id })
  const response = await fetchVk(args)
  if (response.errors) { throw new Error(response.errors[0].message) }
  return response
}

export const redirectCrm = async (context) => {
  console.log(context)
  let args = Object.assign({}, context.body, { user_id: context.user_id })
  const response = await fetchCrm(args)
  if (response.errors) { throw new Error(response.errors[0].message) }
  return response
}
