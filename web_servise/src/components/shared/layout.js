import React from 'react'
import { UIStore } from 'stores'
import { ApolloProvider } from 'react-apollo'
import NotificationSystem from 'react-notification-system'

import Header from 'components/shared/header'
import Sidebar from 'components/shared/sidebar'


export default class LayoutComponent extends React.Component {

  componentDidMount() {
    UIStore.notificationSystem = this.refs.notificationSystem
  }

  render() {
    let { client } = this.props

    return (
      <ApolloProvider client={client}>
        <div>
          <NotificationSystem className="notification" ref="notificationSystem" allowHTML={ true } />

          <div>
            <Sidebar />
            <div>
                <Header />
                { this.props.children }
            </div>
          </div>

        </div>
      </ApolloProvider>
    )
  }
}
