import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'lib/nav_link'
import { graphql } from 'react-apollo'
import { clientDelete } from 'components/crm/graphql/querues'
// import { filter } from 'ramda'
import Notification from 'lib/notification'
import { Row, Container, Col, Button } from 'reactstrap'

class GroupView extends Component {

  static propTypes = {
    object: PropTypes.object.isRequired,
    refresh: PropTypes.func.isRequired,
    clientDelete: PropTypes.func.isRequired,
  }

  handleDestroy = async () => {
    const { object, clientDelete } = this.props

    try {
      await clientDelete({
        variables: { id: object.id },
      })
      this.props.refresh()
    } catch (error) {
      Notification.error(error)
    }

  }

  render() {
    let { object } = this.props

    return (
      <Container>
        <Row>
          <Col xs="1">
            { object.id }
          </Col>

          <Col xs="2" onClick={this.handleColor}>
            <Link href={`/crm/clients/${object.id}`}>
              <Button>
                { object.name }
              </Button>
            </Link>
          </Col>

          <Col xs={2}>
            { object.number }
          </Col>

          <Col xs={2}>
            { object.phone }
          </Col>

          <Col xs={2}>
            { object.note }
          </Col>

          <Col xs={2}>
            { object.date_birth }
          </Col>

          <Col xs={1}>
            <Button onClick={this.handleDestroy}>
              <i className="fa fa-ban" aria-hidden="true" />
            </Button>
          </Col>

        </Row>
        <br />
      </Container>
    )
  }

}

export default graphql(
  clientDelete, { name: "clientDelete"}
)(GroupView)
