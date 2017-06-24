import React from 'react'
import NotificationSystem from 'react-notification-system'
import { UIStore } from 'stores'
import { Route } from 'react-router-dom'
import Header from './header'

class LayoutComponent extends React.Component {

  componentDidMount() {
    UIStore.notificationSystem = this.refs.notificationSystem
  }

  render() {
    return (
      <div>
        <NotificationSystem className="notification" ref="notificationSystem" allowHTML={ true } />
        <Header />

        { this.props.children }
      </div>
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
