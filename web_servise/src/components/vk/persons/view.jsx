import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'
import { Link } from 'lib/nav_link'
import Notification from 'lib/notification'
import { deletePersonQuery } from 'components/vk/graphql/querues'

class View extends Component {

  static propTypes = {
    object: PropTypes.object.isRequired,
    refetch: PropTypes.func.isRequired,
    deletePersonQuery: PropTypes.func.isRequired,
  }

  state = {
    person: {},
    attributes: [
      "id",
      "uid",
      "first_name",
      "last_name",
      "followers_count",
      "sex",
      "city",
      "bdate",
      "crop_photo_url",
      "status",
    ]
  }

  // handlerInactive = () => {
  //   let { object } = this.props
  //   // User.setInactive({ id: object.id })
  // }

  handleDestroy = async () => {
    const { object, deletePersonQuery } = this.props

    try {
      await deletePersonQuery({
        variables: { input: { id: object.id } }
      })
      this.props.refetch()
      Notification.success("destroy")
    } catch (error) {
      Notification.error(error)
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
          <Link href={`/crm/clients/${object.id}`}>
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
  deletePersonQuery, { name: "deletePersonQuery"}
)(View)
