import React from 'react'
import { Route } from 'react-router-dom'
import LayoutComponent from 'components/shared/layout'
import { ApolloProvider, ApolloClient, createNetworkInterface } from 'react-apollo'

export const LayoutWithApollo = ({uri: url, component: Component, ...rest}) => {
  const client = new ApolloClient({
    networkInterface: createNetworkInterface({ uri: url }),
    dataIdFromObject: o => o.id,
  })

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

export const Layout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={ matchProps => (
      <LayoutComponent>
        <Component {...matchProps} />
      </LayoutComponent>
    )} />
  )
}

