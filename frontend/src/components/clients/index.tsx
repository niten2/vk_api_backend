import * as React from 'react'
import Link from "src/config/link"

import AuthProvider from "src/config/auth_provider"
import ListClient from './list'

const NewClientLink = () => {
  if (!AuthProvider.isAdmin()) {
    return (
      <div className="container-fluid">
        <div className="card">
          <div className="card-block">
            <Link to={`/clients/new`}>
              <button type="button" className="btn btn-primary">
                New Client
              </button>
            </Link>
          </div>
        </div>
      </div>
    )
  } else {
    return <div />
  }
}

class IndexClient extends React.Component<{}, {}> {
  render() {
    return (
      <div className="animated fadeIn">
        <NewClientLink />

        <ListClient />
      </div>
    )
  }
}

export default IndexClient
