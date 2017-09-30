import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { gql, compose, graphql } from 'react-apollo'
import { connect } from 'react-redux'
import Notification from 'actions/notification'
import { set, lensProp } from 'ramda'
import { pagination } from "lib/pagination"

const statusesQuery = gql`
  query statuses($pagination: PaginationInput) {
    statuses(pagination: $pagination) {
      id
      name
    }
    meta(input: { name: "Status" }) {
      count
    }
  }
`

const updateStatusQuery = gql`
  mutation updateStatus($id: ID!, $input: StatusInput!) {
    updateStatus(id: $id, input: $input) {
      id
    }
  }
`

const deleteStatusQuery = gql`
  mutation deleteStatus($input: IdInput!) {
    deleteStatus(input: $input) {
      id
    }
  }
`

class View extends Component {

  static propTypes = {
    object: PropTypes.object.isRequired,
    refresh: PropTypes.func.isRequired,
    deleteStatusQuery: PropTypes.func.isRequired,
    updateStatusQuery: PropTypes.func.isRequired,
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
    const { dispatch, refresh, object, deleteStatusQuery } = this.props

    try {
      await deleteStatusQuery({
        variables: {
          input: {
            id: object.id
          }
        },
      })
      refresh()
      dispatch(Notification.success("destroy status"))
    } catch (err) {
      dispatch(Notification.error(err.message))
    }
  }

  handleUpdate = async (e) => {
    e.preventDefault()
    const { status } = this.state
    const { dispatch, updateStatusQuery } = this.props

    try {
      await updateStatusQuery({
        variables: {
          id: status.id,
          input: {
            name: status.name,
          }
        },
        // refetchQueries: [{
        //   query: statusesQuery, variables: {
        //     pagination: pagination(this.props),
        //     fetchPolicy: 'network-only',
        //   }
        // }],
      })
      dispatch(Notification.success("update"))
    } catch (err) {
      dispatch(Notification.error(err.message))
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
            value={status.name || ""}
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

const mapStateToProps = (props) => {
  return {
    perPage: props.settings.perPage,
  }
}

export default connect(mapStateToProps)(
  compose(
    // graphql(statusesQuery, {name: "statusesQuery"}),
    graphql(updateStatusQuery, {name: "updateStatusQuery"}),
    graphql(deleteStatusQuery, {name: "deleteStatusQuery"}),
  )(View)
)
