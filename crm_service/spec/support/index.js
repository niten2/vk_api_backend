import { createApolloFetch } from 'apollo-fetch'
import settings from 'config/settings'
import { createJwt } from "api/services/jwt"

const uri = `http://localhost:${settings.port}/v1`

const addHeader = ({ request, options }, next) => {
  if (!options.headers) {
    options.headers = {}
  }

  if (request.user) {
    const jwt = createJwt(request.user)
    options.headers['Authorization'] = `Token ${jwt}`
  }

  next()
}

export const graphqlQuery = createApolloFetch({ uri }).use(addHeader)
