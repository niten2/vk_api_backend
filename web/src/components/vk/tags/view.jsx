import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import Notification from 'actions/notification'
import { graphql } from 'react-apollo'
import { Link } from 'lib/nav_link'
import { deleteTagQuery } from 'components/vk/graphql/querues'

class View extends Component {

  static propTypes = {
    object: PropTypes.object.isRequired,
    refetch: PropTypes.func.isRequired,
    deleteTagQuery: PropTypes.func.isRequired,
  }

  state = {
    person: {},
    attributes: [
      "id",
      "name",
      "status",
    ]
  }

  handleDestroy = async () => {
    const { object, deleteTagQuery } = this.props

    try {
      await deleteTagQuery({
        variables: { input: { id: object.id } },
      })
      this.props.refetch()
      // Notification.success("destroy")
    } catch (error) {
      // Notification.error(error)
    }

  }

  render() {
    const { object } = this.props
    const { attributes } = this.state

    return (
      <tr>
        { attributes.map((attribute, index) =>
          <td key={index}>{ object[attribute] }</td>
        )}

        <td>
          <Link href={`/vk/tags/${object.id}`}>
            Edit
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
  deleteTagQuery, { name: "deleteTagQuery"}
)(View)
