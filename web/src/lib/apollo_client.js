import { ApolloClient, createNetworkInterface } from 'react-apollo'
// import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws'
import settings from "lib/settings"
import authProvider from 'lib/auth_provider'

export const configureClient = () => {
  // let networkInterface

  // if (uriSubscription) {
    // const wsClient = new SubscriptionClient(uriSubscription, {
    //   reconnect: true,
    //   connectionParams: {
    //     Authorization: authProvider.fetchToken(),
    //   },
    // })
    // networkInterface = addGraphQLSubscriptions(
    //   createNetworkInterface({ uri: url }),
    //   wsClient
    // )
  // } else {
    // let networkInterface = createNetworkInterface({
    //   uri: url,
    // })
  // }

  let networkInterface = createNetworkInterface({ uri: settings.urlBackend })

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
