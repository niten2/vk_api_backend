import React from 'react'
import NotificationSystem from 'react-notification-system'
import { UIStore } from 'stores'
import { Route } from 'react-router-dom'
import Header from './header'

import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface,
} from 'react-apollo'

import Settings from "lib/settings"
const networkInterface = createNetworkInterface({ uri: `${Settings.crm_servise}/graphql` })
const client = new ApolloClient({ networkInterface })

class LayoutComponent extends React.Component {

  componentDidMount() {
    UIStore.notificationSystem = this.refs.notificationSystem
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <NotificationSystem className="notification" ref="notificationSystem" allowHTML={ true } />
          <Header />

          { this.props.children }
        </div>
      </ApolloProvider>
    )
  }
}

const Layout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={ matchProps => (
      <LayoutComponent>
        <Component {...matchProps} />
      </LayoutComponent>
    )} />
  )
}

export default Layout
