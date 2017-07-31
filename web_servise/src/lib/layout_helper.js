import React from 'react'
import { Route } from 'react-router-dom'
import LayoutComponent from 'components/shared/layout'
import { ApolloProvider } from 'react-apollo'
import settings from "lib/settings"
import { createClient } from './apollo_client'

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
  // createClient(settings.uriVkServise, settings.vkServiseSubscriptions)
  createClient(settings.uriVkServise)
)

export const LayoutInstagram = createLayoutWithApollo(
  createClient(settings.uriInstaServise)
)
