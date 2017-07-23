import React from 'react'
import { Route } from 'react-router-dom'
import LayoutComponent from 'components/shared/layout'
import { ApolloProvider, ApolloClient, createNetworkInterface } from 'react-apollo'
import settings from "lib/settings"

const createClient = (url) => {
  return new ApolloClient({
    networkInterface: createNetworkInterface({ uri: url }),
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

export const LayoutAuth = createLayoutWithApollo(
  createClient(settings.uriAuthServise)
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
