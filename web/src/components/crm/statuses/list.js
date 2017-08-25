import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import Notification from 'actions/notification'
import { graphql } from 'react-apollo'
import { statusesQuery } from 'components/crm/graphql/querues'
import Pagination from 'components/shared/pagination'
import StatusView from './view'

class ClientList extends Component {

  static propTypes = {
    statusesQuery: PropTypes.object.isRequired,
  }

  // componentWillReceiveProps(props) {
    // let error = props.statusesQuery.error
    // if (error) { Notification.error(error.message) }
  // }

  render() {
    const { page } = this.props.match.params
    let { meta, loading, error, statuses, refetch } = this.props.statusesQuery

    if (loading ) {
      return <p className="text-center">Loading ...</p>
    }

    if (error) {
      return <p className="text-center">Error ...</p>
    }

    return (

      <div className="col-lg-6">
        <div className="card">
          <div className="card-header">
            <i className="fa fa-align-justify"></i> Status
          </div>
          <div className="card-block text-center">
            <table className="table">
              <thead>
                <tr>
                  <th className="text-center">Id</th>
                  <th className="text-center">Name</th>
                  <th className="text-center">Destroy</th>
                  <th className="text-center">Update</th>
                </tr>
              </thead>
              <tbody>

                { statuses.map( (object, index) =>
                  <StatusView
                    key={index}
                    object={object}
                    refresh={() => refetch()}
                  />
                )}

              </tbody>
            </table>

            <Pagination
              href="/crm/statuses"
              count={meta.count}
              currentPage={parseInt(page, 10)}
              perPage={PER_PAGE}
            />

          </div>
        </div>
      </div>

    )
  }
}

const PER_PAGE = 10
export default graphql(statusesQuery,
  {
    name: "statusesQuery",
    options: (props) => {
      console.log(props)
      const limit = PER_PAGE
      const page = parseInt(props.match.params.page, 10)
      const offset = (page - 1) * limit
      return {
        variables: {
          pagination: { limit, offset }
        }
      }
    }
  }
)(ClientList)
