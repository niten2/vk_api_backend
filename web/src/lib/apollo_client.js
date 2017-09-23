import { ApolloClient, createNetworkInterface } from 'react-apollo'
import settings from "lib/settings"
import authProvider from 'lib/auth_provider'

const addToken = {
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {}
    }
    req.options.headers.authorization = authProvider.fetchToken()
    next()
  }
}

const removeToken = {
  applyAfterware({ response }, next) {
    if (response.status === 401) {
      authProvider.removeToken()
    }
    next()
  }
}

export const configureClient = () => {
  const networkInterface = createNetworkInterface({ uri: settings.urlBackend })

  networkInterface.use([ addToken ])
  networkInterface.useAfter([ removeToken ])

  return new ApolloClient({
    networkInterface: networkInterface,
    dataIdFromObject: o => o.id,
  })

}
