import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'lib/nav_link'
import { graphql } from 'react-apollo'
import { deleteClientQuery } from 'components/crm/graphql/querues'
import Notification from 'lib/notification'

class GroupView extends Component {

  static propTypes = {
    object: PropTypes.object.isRequired,
    refetch: PropTypes.func.isRequired,
    clientDelete: PropTypes.func.isRequired,
  }

  handleDestroy = async () => {
    const { object, deleteClientQuery } = this.props

    try {
      await deleteClientQuery({
        variables: { id: object.id },
      })
      this.props.refetch()
    } catch (error) {
      Notification.error(error)
    }

  }

  render() {
    let { object } = this.props

    return (
      <tr>
        <td>{ object.id }</td>

        <td>
            { object.name }
        </td>

        <td>{ object.number }</td>
        <td>{ object.phone }</td>
        <td>{ object.note }</td>
        <td>{ object.date_birth }</td>

        <td >
          <div className="text-center" onClick={this.handleDestroy}>
            <i className="pointer icon-ban" />
          </div>
        </td>

        <td>
          <span className="">
            { object.status.name }
          </span>
        </td>

        <td>
          <Link href={`/crm/clients/${object.id}`}>
            Edit
          </Link>
        </td>

      </tr>
    )
  }

}

export default graphql(
  deleteClientQuery, { name: "deleteClientQuery"}
)(GroupView)
