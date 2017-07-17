import React from 'react'
import { UIStore } from 'stores'
import { Route } from 'react-router-dom'
import settings from "lib/settings"
import NotificationSystem from 'react-notification-system'
import Header from 'components/shared/header'

import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface,
} from 'react-apollo'

const networkInterface = createNetworkInterface({ uri: settings.graphqlUriAuthServise })
const client = new ApolloClient({
  networkInterface: networkInterface,
  dataIdFromObject: o => o.id,
})

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
