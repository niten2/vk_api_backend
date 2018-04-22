import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Notification from 'actions/notification'
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
    const { dispatch, object, deleteTagQuery } = this.props

    try {
      await deleteTagQuery({
        variables: { input: { id: object.id } },
      })
      this.props.refetch()
      dispatch(Notification.success("destroy tag"))
    } catch (err) {
      dispatch(Notification.error(err.message))
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

export default connect()(
  graphql(
    deleteTagQuery, { name: "deleteTagQuery"}
  )(View)
)
