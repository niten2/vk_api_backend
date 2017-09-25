import { createApolloFetch } from 'apollo-fetch'
import settings from 'config/settings'

const uri = `http://localhost:${settings.port}/v1`

const addHeader = ({ request, options }, next) => {
  if (!options.headers) {
    options.headers = {}
  }

  if (request.user) {
    options.headers['user_id'] = "1"
  }

  next()
}

export const graphqlQuery = createApolloFetch({ uri }).use(addHeader)
