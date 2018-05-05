import * as React from "react"

import AuthProvider from "src/config/auth_provider"
import Spinner from "src/components/shared/spinner"
import Page500 from "src/components/shared/page500"

import ListLoans from "src/components/clients/loans/list"
import NewLoan from "src/components/clients/loans/new"

import { withData } from "src/components/clients/loans/queries"
import { ClientInfo } from "src/components/clients/loans/components"

interface P {
  clientQuery: {
    client: any
    loading: boolean
    error: any
  }
}

class IndexLoan extends React.Component<P, {}> {

  render() {
    const { client, loading, error } = this.props.clientQuery

    if (loading) {
      return <Spinner />
    }

    if (error) {
      return <Page500 message={error.message}/>
    }

    return (
      <div className="animated fadeIn">

        <ClientInfo client={client} />
        <ListLoans client={client} />
        {!AuthProvider.isAdmin() ? <NewLoan client={client} /> : null}

      </div>
    )
  }

}

export default withData(IndexLoan)
