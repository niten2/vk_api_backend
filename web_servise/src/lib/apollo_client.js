import { ApolloClient, createNetworkInterface } from 'react-apollo'
import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws'
import authProvider from 'lib/auth_provider'

export const createClient = (url, uriSubscription) => {
  let networkInterface

  if (uriSubscription) {
    const wsClient = new SubscriptionClient(uriSubscription, {
      reconnect: true,
      connectionParams: {
        Authorization: authProvider.fetchToken(),
      },
    })
    networkInterface = addGraphQLSubscriptions(
      createNetworkInterface({ uri: url }),
      wsClient
    )
  } else {
    networkInterface = createNetworkInterface({
      uri: url,
    })
  }

  networkInterface.use([{
    applyMiddleware(req, next) {
      if (!req.options.headers) {
        req.options.headers = {}
      }
      req.options.headers.authorization = authProvider.fetchToken()
      next()
    }
  }])

  networkInterface.useAfter([{
    applyAfterware({ response }, next) {
      if (response.status === 401) {
        Notification.error("Server response status 401")
        authProvider.removeToken()
      }
      next()
    }
  }])

  return new ApolloClient({
    networkInterface: networkInterface,
    dataIdFromObject: o => o.id,
  })

}
