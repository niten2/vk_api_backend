import React from 'react'
// import { observer } from 'mobx-react'
import { UIStore } from 'stores'
import NotificationSystem from 'react-notification-system'

// import { Clearfix, Grid, Row, Col } from 'react-bootstrap'
import Header from "./header"

// import Footer from "./footer"

// @observer
export default class extends React.Component {

  componentDidMount() {
    UIStore.notificationSystem = this.refs.notificationSystem
  }

  render() {
    let { confim } = UIStore

    return (
      <div>
        <NotificationSystem className="notification" ref="notificationSystem" allowHTML={ true } />
        <Header />

        { this.props.children }
      </div>
    )
  }
}

