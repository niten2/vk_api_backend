import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Notifications from 'react-notification-system-redux'
import Header from 'components/shared/header'
import Sidebar from 'components/shared/sidebar'
import Breadcrumb from 'components/shared/breadcrumb'
import Aside from 'components/shared/aside'
import Footer from 'components/shared/footer'

class Layout extends React.Component {

  render() {
    const { notifications } = this.props

    return (
      <div className="app">
        <Notifications notifications={notifications || []} />

        <Header {...this.props}/>
        <div className="app-body">
          <Sidebar {...this.props}/>
          <main className="main">
            <Breadcrumb />
            <div className="container-fluid">
              { this.props.children }
            </div>
          </main>
          <Aside />
        </div>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    notifications: state.notifications,
    settings: state.settings
  }
}

const LayoutComponent = connect(mapStateToProps)(Layout)

export default ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={ matchProps => (
      <LayoutComponent>
        <Component {...matchProps} />
      </LayoutComponent>
    )} />
  )
}
