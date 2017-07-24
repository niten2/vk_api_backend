import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'lib/nav_link'
import { graphql } from 'react-apollo'
import Notification from 'lib/notification'
import { statusesQuery } from 'components/crm/graphql/querues'
import StatusView from './view'
// import { Col, Button } from 'reactstrap'

class List extends Component {

  state = {}

  static propTypes = {
    statusesQuery: PropTypes.object.isRequired,
  }

  componentWillReceiveProps(props) {
    let error = props.statusesQuery.error
    if (error) { Notification.error(error.message) }
  }

  render() {
    let { loading, error, statuses, refetch } = this.props.statusesQuery

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
            <i className="fa fa-align-justify"></i> Clients
          </div>
          <div className="card-block">
            <table className="table text-center">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Destroy</th>
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

    )
  }
}

export default graphql(statusesQuery,
  { name: "statusesQuery"}
)(List)
