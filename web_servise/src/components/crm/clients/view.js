import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'lib/nav_link'
import { graphql } from 'react-apollo'
import { clientDelete } from 'components/crm/graphql/querues'
// import { filter } from 'ramda'
import Notification from 'lib/notification'
// import { Row, Container, Col, Button } from 'reactstrap'

class GroupView extends Component {

  static propTypes = {
    object: PropTypes.object.isRequired,
    refresh: PropTypes.func.isRequired,
    clientDelete: PropTypes.func.isRequired,
  }

  handleDestroy = async () => {
    const { object, clientDelete } = this.props

    try {
      await clientDelete({
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
          <span className="badge badge-success">Active</span>
        </td>
      </tr>
    )
  }

}

export default graphql(
  clientDelete, { name: "clientDelete"}
)(GroupView)
