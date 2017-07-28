import React from 'react'
import { Route } from 'react-router-dom'
import LayoutComponent from 'components/shared/layout'
import { ApolloProvider, ApolloClient, createNetworkInterface } from 'react-apollo'
import settings from "lib/settings"
import authProvider from 'lib/auth_provider'

const createClient = (url) => {
  const networkInterface = createNetworkInterface({
    uri: url,
  })

  networkInterface.use([{
    applyMiddleware(req, next) {
      if (!req.options.headers) {
        req.options.headers = {}
      }

      req.options.headers.authorization = authProvider.fetchToken()
      next()
    },

  }])

  networkInterface.useAfter([{
    applyAfterware({ response }, next) {
      if (response.status === 401) {
        console.log("---------> server response status 401")
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

const createLayoutWithApollo = (client) => {
  return ({component: Component, ...rest}) => {
    return (
      <Route {...rest} render={ matchProps => (
        <ApolloProvider client={client}>
          <LayoutComponent>
            <Component {...matchProps} />
          </LayoutComponent>
        </ApolloProvider>
      )} />
    )
  }
}

export const Layout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={ matchProps => (
      <LayoutComponent>
        <Component {...matchProps} />
      </LayoutComponent>
    )} />
  )
}

export const LayoutAuthPrivate = createLayoutWithApollo(
  createClient(settings.uriAuthServisePrivate)
)

export const LayoutAuthPublic = createLayoutWithApollo(
  createClient(settings.uriAuthServisePublic)
)

export const LayoutCrm = createLayoutWithApollo(
  createClient(settings.uriCrmServise)
)

export const LayoutVk = createLayoutWithApollo(
  createClient(settings.uriVkServise)
)

export const LayoutInstagram = createLayoutWithApollo(
  createClient(settings.uriInstaServise)
)
