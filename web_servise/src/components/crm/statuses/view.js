import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compose, graphql } from 'react-apollo'
import { statusesQuery, statusUpdateQuery, statusDelete } from 'components/crm/graphql/querues'
import Notification from 'lib/notification'
import { set, lensProp } from 'ramda'

class View extends Component {

  static propTypes = {
    object: PropTypes.object.isRequired,
    refresh: PropTypes.func.isRequired,
    statusDelete: PropTypes.func.isRequired,
    statusUpdateQuery: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.setState({ status: this.props.object })
  }

  state = {
    status: {}
  }

  handleSetState = (e) => {
    const { name, value } = e.target
    let setClient = set(lensProp(name), value)
    this.setState({ status: setClient(this.state.status) })
  }

  handleDestroy = async () => {
    const { status, statusDelete } = this.props

    try {
      await statusDelete({
        variables: { id: status.id },
      })
      this.props.refresh()
    } catch (error) {
      Notification.error(error)
    }
  }

  handleUpdate = async (e) => {
    e.preventDefault()
    const { status } = this.state
    const { statusUpdateQuery } = this.props

    try {
      await statusUpdateQuery({
        variables: {
          id: status.id,
          name: status.name,
        },
        refetchQueries: [{
          query: statusesQuery,
        }],
      })
      Notification.success("ok")
    } catch (e) {
      Notification.error(e)
    }
  }


  render() {
    let { status } = this.state

    return (
      <tr>
        <td>{ status.id }</td>

        <td>
          <input
            className="form-control"
            onChange={ this.handleSetState }
            onKeyPress={ this.handleOnKeyPress }
            placeholder="name"
            value={status.name}
            name="name"
          />
        </td>

        <td >
          <div className="text-center" onClick={this.handleDestroy}>
            <i className="pointer icon-ban" />
          </div>
        </td>

        <td >
          <button
            className="btn btn-outline-success"
            onClick={this.handleUpdate}
          > Update </button>
        </td>
      </tr>
    )
  }

}

export default compose(
  graphql(statusUpdateQuery, {name: "statusUpdateQuery"}),
  graphql(statusDelete, {name: "statusDelete"}),
)(View)
