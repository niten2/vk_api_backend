import * as React from 'react'
import * as NotificationSystem from 'react-notification-system'
import { Redirect, Route } from 'react-router-dom'

import UIStore from 'src/store'
import AuthProvider from "src/config/auth_provider"
import Header from 'src/components/shared/header'
import Sidebar from 'src/components/shared/sidebar'
import Spinner from 'src/components/shared/spinner'
import Page500 from 'src/components/shared/page500'
import { withData } from "./queries"

class LayoutComponent extends React.Component<any, any> {

  notification = (ref) => {
    UIStore.notificationSystem = ref
  }

  render() {
    let { me, loading, error } = this.props.meQuery

    if (loading ) {
      return <Spinner />
    }

    if (error) {
      return <Page500 error={error}/>
    }

    return (
      <div className="app">
        <NotificationSystem ref={this.notification} allowHTML={true} />

        <Header {...this.props} />

        <div className="app-body">
          <Sidebar {...this.props}/>

          <main className="main">
            <div className="margin-bottom-15em" />

            {this.props.children}

          </main>
        </div>

      </div>
    )
  }
}

const LayoutComponentWithData = withData(LayoutComponent)

export const Layout = ({component: Component, ...rest}) => {
  return (
    <LayoutComponentWithData>
      <Route {...rest} render={(matchProps) => (<Component {...matchProps} />)} />
    </LayoutComponentWithData>
  )
}

export const PrivateLayout = (options: any) => {
  if (AuthProvider.hasLogin()) {
    return Layout(options)
  } else {
    return <Redirect to="/sign_in" />
  }
}

export const PrivateLayoutAdmin = (options: any) => {
  if (AuthProvider.hasLogin() && AuthProvider.isAdmin()) {
    return Layout(options)
  } else {
    return <Redirect to="/" />
  }
}

export const PrivateLayoutManager = (options: any) => {
  if (AuthProvider.hasLogin() && !AuthProvider.isAdmin()) {
    return Layout(options)
  } else {
    return <Redirect to="/" />
  }
}
