import React from 'react'
import { Route } from 'react-router-dom'
import settings from "lib/settings"
import LayoutComponent from 'components/shared/layout'
import { ApolloClient, createNetworkInterface } from 'react-apollo'

const networkInterface = createNetworkInterface({ uri: settings.uriInstaServise })
const client = new ApolloClient({
  networkInterface: networkInterface,
  dataIdFromObject: o => o.id,
})

const Layout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={ matchProps => (
      <LayoutComponent client={client}>
        <Component {...matchProps} />
      </LayoutComponent>
    )} />
  )
}

export default Layout
