import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'lib/nav_link'
import { graphql } from 'react-apollo'
import { deleteClientQuery } from 'components/crm/graphql/querues'
import Notification from 'actions/notification'

class ClientView extends Component {

  static propTypes = {
    object: PropTypes.object.isRequired,
    refetch: PropTypes.func.isRequired,
    deleteClientQuery: PropTypes.func.isRequired,
  }

  state = {
    object: {},
    attributes: [
      "id",
      "name",
      "number",
      "phone",
      "note",
      "date_birth"
    ]
  }

  handleDestroy = async () => {
    const { dispatch, refetch, object, deleteClientQuery } = this.props

    try {
      await deleteClientQuery({
        variables: {
          input: {
            id: object.id
          }
        },
      })
      refetch()
      dispatch(Notification.success("update"))
    } catch (err) {
      dispatch(Notification.error(err.message))
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
          <span className="">
            { object.status && object.status.name }
          </span>
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

export default connect()(
  graphql(
    deleteClientQuery, { name: "deleteClientQuery"}
  )(ClientView)
)
