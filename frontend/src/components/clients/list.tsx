import * as React from 'react'

import Spinner from 'src/components/shared/spinner'
import Page500 from 'src/components/shared/page500'
import ViewClient from 'src/components/clients/list/view'
import { withData } from 'src/components/clients/list/queries'

interface P {
  clientsQuery: any
}

class ListClient extends React.Component<P, {}> {

  render() {
    let { clients, loading, error } = this.props.clientsQuery

    if (loading ) {
      return <Spinner />
    }

    if (error) {
      return <Page500 />
    }

    return (
      <div className="container-fluid">
        <div className="animated fadeIn">

          <div className="row">
            <div className="col-lg-12">
              <div className="card">

                <div className="card-header">
                  <i className="fa fa-align-justify" /> Clients
                </div>

                <div className="card-block">
                  <table className="table text-center">
                    <thead>
                      <tr>
                        <th className="text-center">Id</th>
                        <th className="text-center">Email</th>
                        <th className="text-center">Passport</th>
                        <th className="text-center">Phone</th>
                        <th className="text-center">Edit</th>
                      </tr>
                    </thead>
                    <tbody>

                      { clients.map((object, index) =>
                        <ViewClient
                          key={index}
                          object={object}
                        />
                      )}

                    </tbody>
                  </table>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default withData(ListClient)
