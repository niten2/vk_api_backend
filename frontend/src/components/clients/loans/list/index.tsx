import * as React from 'react'

import AuthProvider from 'src/config/auth_provider'
import Spinner from 'src/components/shared/spinner'
import Page500 from 'src/components/shared/page500'
import ViewLoan from "src/components/clients/loans/list/view"
import { withData } from "src/components/clients/loans/list/queries"

interface P {
  loansQuery: {
    loading: boolean
    error: any
    loans: any
  }
  client: {
    id: string
  }
}

class ListLoan extends React.Component<P, {}> {

  render() {
    let { loans, loading, error } = this.props.loansQuery
    let { client } = this.props

    if (loading) {
      return <Spinner />
    }

    if (error) {
      return <Page500 message={error.message}/>
    }

    return (
      <div className="container-fluid">

        <div className="card">
          <div className="card-header">
            <i className="fa fa-align-justify"/>
            List Loans
          </div>

          <div className="card-block">
            <form className="form-2orizontal">

              <div className="card-block">
                <table className="table text-center">
                  <thead>
                    <tr>
                      <th className="text-center">Sum</th>
                      <th className="text-center">Total</th>
                      <th className="text-center">Date end</th>
                      {AuthProvider.isAdmin() ? <th className="text-center">Edit</th> : null}
                    </tr>
                  </thead>

                  <tbody>
                    {
                      loans.map((loan, index) =>
                        <ViewLoan
                          key={index}
                          loan={loan}
                          clientId={client.id}
                        />
                      )
                    }
                  </tbody>
                </table>
              </div>

            </form>
          </div>

        </div>
      </div>
    )
  }

}

export default withData(ListLoan)
