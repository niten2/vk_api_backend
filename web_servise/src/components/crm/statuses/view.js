import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'lib/nav_link'
import { graphql } from 'react-apollo'
import { statusDelete } from 'components/crm/graphql/querues'
import Notification from 'lib/notification'

class View extends Component {

  static propTypes = {
    object: PropTypes.object.isRequired,
    refresh: PropTypes.func.isRequired,
    statusDelete: PropTypes.func.isRequired,
  }

  handleDestroy = async () => {
    const { object, statusDelete } = this.props

    try {
      await statusDelete({
        variables: { id: object.id },
      })
      this.props.refresh()
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
          <Link href={`/crm/clients/${object.id}`}>
            { object.name }
          </Link>
        </td>

        <td >
          <div className="text-center" onClick={this.handleDestroy}>
            <i className="pointer icon-ban" />
          </div>
        </td>
      </tr>
    )
  }

}

export default graphql(
  statusDelete, { name: "statusDelete"}
)(View)


