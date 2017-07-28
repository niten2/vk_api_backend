import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'
import { Link } from 'lib/nav_link'
import { personDeleteQuery } from 'components/vk/graphql/querues'
import Notification from 'lib/notification'

class View extends Component {

  static propTypes = {
    object: PropTypes.object.isRequired,
    refetch: PropTypes.func.isRequired,
    personDeleteQuery: PropTypes.func.isRequired,
  }

  // handlerInactive = () => {
  //   let { object } = this.props
  //   // User.setInactive({ id: object.id })
  // }

  handleDestroy = async () => {
    const { object, personDeleteQuery } = this.props

    try {
      await personDeleteQuery({
        variables: { id: object.id },
      })
      this.props.refetch()
      Notification.success("destroy")
    } catch (error) {
      Notification.error(error)
    }

  }

  render() {
    let { object } = this.props
    return (
      <tr>
        <td>{ object.id }</td>

        <td> </td>
        <td>
          { object.first_name }
        </td>

        <td> </td>
        <td>
          { object.sex === 1 ? "women" : "men"}
        </td>
        <td> </td>
        <td> </td>
        <td> </td>

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
  personDeleteQuery, { name: "personDeleteQuery"}
)(View)
