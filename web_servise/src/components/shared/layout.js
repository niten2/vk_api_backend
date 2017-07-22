import React from 'react'
import { UIStore } from 'stores'
import NotificationSystem from 'react-notification-system'
import { Container, Col, Row } from 'reactstrap'

import Header from 'components/shared/header'
import Sidebar from 'components/shared/sidebar'


export default class LayoutComponent extends React.Component {

  componentDidMount() {
    UIStore.notificationSystem = this.refs.notificationSystem
  }

  render() {
    return (
      <div>
        <NotificationSystem className="notification" ref="notificationSystem" allowHTML={ true } />

        <Container fluid>
          <Row noGutters>

            <Col xs={3}>
              <Sidebar />
            </Col>

            <Col xs={9}>
              <Header />
              { this.props.children }
            </Col>
          </Row>
        </Container>

      </div>
    )
  }
}
