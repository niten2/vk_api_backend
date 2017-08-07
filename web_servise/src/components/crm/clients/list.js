import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'lib/nav_link'
import { graphql } from 'react-apollo'
import Notification from 'lib/notification'
import { clientsQuery } from 'components/crm/graphql/querues'
import ClientView from './view'
import Spinner from 'components/shared/spinner'
import Page500 from 'components/shared/page500'
import Pagination from 'components/shared/pagination'

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

class Clients extends Component {

  static propTypes = {
    clientsQuery: PropTypes.object.isRequired,
  }

  state = {}

  componentWillReceiveProps(props) {
    let error = props.clientsQuery.error
    if (error) { Notification.error(error.message) }
  }

  render() {
    const { page } = this.props.match.params
    let { loading, error, clients, refetch, meta } = this.props.clientsQuery

    if (loading ) {
      return <Spinner />
    }

    if (error) {
      return <Page500 />
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
                        refetch={refetch}
                      />
                    )}

                  </tbody>
                </table>

                <Pagination
                  href="/crm/clients"
                  count={meta.count}
                  currentPage={parseInt(page, 10)}
                  perPage={PER_PAGE}
                />

              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

const PER_PAGE = 10

export default graphql(clientsQuery, {
  name: "clientsQuery",
  options: (props) => {
    const limit = PER_PAGE
    const page = parseInt(props.match.params.page, 10)
    const offset = (page - 1) * limit
    return {
      variables: {
        pagination: { limit, offset }
      }
    }
  }
})(Clients)
