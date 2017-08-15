import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'lib/nav_link'
import { graphql } from 'react-apollo'
import { deleteSettingQuery } from 'components/auth/graphql/private/querues'

class SettingView extends Component {

  static propTypes = {
    object: PropTypes.object.isRequired,
    refetch: PropTypes.func.isRequired,
    deleteSettingQuery: PropTypes.func.isRequired,
  }

  state = {
    object: {},
    attributes: [
      "name",
      "value"
    ]
  }

  handleDestroy = async () => {
    const { refetch, object, deleteSettingQuery } = this.props

    try {
      await deleteSettingQuery({
        variables: { id: object.id },
      })
      refetch()
    } catch (error) {
      // Notification.error(error)
    }

  }

  render() {
    let { object } = this.props
    let { attributes } = this.state

    return (
      <tr>
        { attributes.map((attribute, index) =>
          <td key={index}>{ object[attribute] }</td>
        )}

        <td >
          <div className="text-center" onClick={this.handleDestroy}>
            <i className="pointer icon-ban" />
          </div>
        </td>

        <td>
          <Link href={`/crm/clients/update/${object.id}`}>
            <i className="pointer icon-folder" />
          </Link>
        </td>

      </tr>
    )
  }

}

export default graphql(
  deleteSettingQuery, { name: "deleteSettingQuery"}
)(SettingView)
