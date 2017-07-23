import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'lib/nav_link'
import { graphql } from 'react-apollo'
import Notification from 'lib/notification'
import { statusQuery } from 'components/crm/graphql/querues'
import ClientView from './view'

import { Col, Button } from 'reactstrap'

class ListStatus extends Component {

  static propTypes = {
    statusQuery: PropTypes.object.isRequired,
  }

  componentWillReceiveProps(props) {
    let error = props.statusQuery.error
    if (error) { Notification.error(error.message) }
  }

  render() {
    let { loading, error, clients, refetch } = this.props.statusQuery

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
            New Status
          </Button>
        </Link>

        &nbsp;


        <br />
        <br />

      </Col>
    )
  }
}

// export default ListStatus

export default graphql(statusQuery,
  { name: "statusQuery"}
)(ListStatus)

        // { statuses.map( (object, index) =>
        //   <StatusView
        //     key={index}
        //     object={object}
        //     refresh={() => refetch()}
        //   />
        // )}
