import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'lib/nav_link'
import { graphql } from 'react-apollo'
import Notification from 'lib/notification'
import { clientsQuery } from 'components/crm/graphql/querues'
import ClientView from './view'

import { Col, Button } from 'reactstrap'

class ListClient extends Component {

  static propTypes = {
    clientsQuery: PropTypes.object.isRequired,
  }

  componentWillReceiveProps(props) {
    let error = props.clientsQuery.error
    if (error) { Notification.error(error.message) }
  }

  render() {
    let { loading, error, clients, refetch } = this.props.clientsQuery

    if (loading ) {
      return <p className="text-center">Loading ...</p>
    }

    if (error) {
      return <p className="text-center">Error ...</p>
    }

    return (
      <Col className="text-center">
        <br />

        <Link href={`/crm/clients/new`}>
          <Button>
            New Contact
          </Button>
        </Link>

        &nbsp;

        <Button onClick={() => { refetch() }}>
          Reload
        </Button>

        <br />
        <br />

        { clients.map( (object, index) =>
          <ClientView
            key={index}
            object={object}
            refresh={() => refetch()}
          />
        )}
      </Col>
    )
  }
}

export default graphql(clientsQuery,
  { name: "clientsQuery"}
)(ListClient)
