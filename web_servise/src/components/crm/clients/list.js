import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'lib/nav_link'
import { graphql } from 'react-apollo'
import Notification from 'lib/notification'
import { clientsQuery } from 'components/crm/graphql/querues'
import ClientView from './view'

const Buttons = (props) => {
  return(
    <div className="row">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-header">
            <strong>Options</strong>
          </div>
          <div className="card-block">

            <Link href={`/crm/clients/new`}>
              <button type="button" className="btn btn-primary">
                New Contact
              </button>
            </Link>

            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => { props.refetch() }}
            >Reload</button>

          </div>
        </div>
      </div>
    </div>
  )
}

class ListClient extends Component {

  static propTypes = {
    clientsQuery: PropTypes.object.isRequired,
  }

  state = {}

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
      <div className="animated fadeIn">

        <Buttons refetch={refetch}/>

        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <i className="fa fa-align-justify"></i> Clients
              </div>
              <div className="card-block">
                <table className="table text-center">
                  <thead>
                    <tr>
                      <th className="text-center">Id</th>
                      <th className="text-center">Name</th>
                      <th className="text-center">Number</th>
                      <th className="text-center">Phone</th>
                      <th className="text-center">Note</th>
                      <th className="text-center">Date birth</th>
                      <th className="text-center">Destroy</th>
                      <th className="text-center">Status</th>
                      <th className="text-center">Edit</th>
                    </tr>
                  </thead>
                  <tbody>

                    { clients.map( (object, index) =>
                      <ClientView
                        key={index}
                        object={object}
                        refresh={() => refetch()}
                      />
                    )}

                  </tbody>
                </table>

                <ul className="pagination">
                  <li className="page-item"><a className="page-link">Prev</a></li>
                  <li className="page-item active">
                    <a className="page-link">1</a>
                  </li>
                  <li className="page-item"><a className="page-link">2</a></li>
                  <li className="page-item"><a className="page-link">3</a></li>
                  <li className="page-item"><a className="page-link">4</a></li>
                  <li className="page-item"><a className="page-link">Next</a></li>
                </ul>

              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default graphql(clientsQuery,
  { name: "clientsQuery"}
)(ListClient)
