import React from 'react'
// import { UIStore } from 'stores'
// import NotificationSystem from 'react-notification-system'

import Header from 'components/shared/header'
import Sidebar from 'components/shared/sidebar'
import Breadcrumb from 'components/shared/breadcrumb'
import Aside from 'components/shared/aside'
import Footer from 'components/shared/footer'

export default class LayoutComponent extends React.Component {

  // componentDidMount() {
    // UIStore.notificationSystem = this.refs.notificationSystem
  // }

  render() {
    return (
      <div className="app">
        <Header />
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
        // <NotificationSystem className="notification" ref="notificationSystem" allowHTML={ true } />
