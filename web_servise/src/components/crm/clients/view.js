import React, { Component } from 'react'
import { Row, Container, Col, Button } from 'reactstrap'
import { Link } from 'lib/nav_link'
import { ClientDelete } from 'components/crm/querues'
import { ApolloStore, graphql } from 'react-apollo'
// import Notification from 'lib/notification'
import { ClientsQuery } from 'components/crm/querues'

import { filter } from 'ramda'


class GroupView extends Component {

  handleDestroy = async () => {
    const { object, mutate } = this.props

    let response = await mutate({
      variables: { id: object.id },
      update: (store, { data: { submitComment } }) => {
        const data = store.readQuery({ query: ClientsQuery });
        data.clients = filter((o) => { return o.id != object.id}, data.clients)
        store.writeQuery({ query: ClientsQuery, data });
      },
    })

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
            <Link href={`/crm/clients/${object.id}/update`}>
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

// var isEven = n => n % 2 === 0;

export default graphql(ClientDelete)(GroupView)

