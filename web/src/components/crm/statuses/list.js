import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { graphql } from 'react-apollo'
import { statusesQuery } from 'components/crm/graphql/querues'
import Pagination from 'components/shared/pagination'
import StatusView from './view'
import Notification from 'actions/notification'
import { pagination } from "lib/pagination"

class ClientList extends Component {

  static propTypes = {
    statusesQuery: PropTypes.object.isRequired,
  }

  componentWillReceiveProps(props) {
    let error = props.statusesQuery.error
    if (error) { Notification.error(error.message) }
  }

  render() {
    const { perPage } = this.props
    const { page } = this.props.match.params
    const { meta, loading, error, statuses, refetch } = this.props.statusesQuery

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
                    {...this.props}
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
              perPage={perPage}
            />

          </div>
        </div>
      </div>

    )
  }
}

const mapStateToProps = (props) => {
  return {
    perPage: props.settings.perPage,
  }
}

export default connect(mapStateToProps)(
  graphql(statusesQuery, {
    name: "statusesQuery",
    options: (props) => {
      return {
        variables: { pagination: pagination(props) },
        fetchPolicy: 'network-only'
      }
    }
  })(ClientList)
)
