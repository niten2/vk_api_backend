import React from 'react'
import { Link } from 'lib/nav_link'
import { Button } from 'reactstrap'
import { graphql } from 'react-apollo'
import Notification from 'lib/notification'

import { ClientsQuery } from 'components/crm/querues'
import ClientView from './view'

const List = ({ data: { loading, error, clients, refetch }}) => {
  clients = clients || []
  console.log("ClientsQuery", clients)

  if (loading) {
    return <p>Loading ...</p>
  }

  if (error) {
    Notification.error(error.message)
  }

  return (
    <div>
      <Link href={`/crm/clients/new`}>
        <Button>
          New Contact
        </Button>
      </Link>

      &nbsp;

      <Button onClick={() => refetch()}>
        Reload
      </Button>

      <br />
      <br />

      { clients.map( (object, index) =>
        <ClientView key={index} object={object} />
      )}
    </div>
  )
}

// export default graphql(ClientListQuery, { options: { pollInterval: 5000 } })(List)
export default graphql(ClientsQuery)(List)
