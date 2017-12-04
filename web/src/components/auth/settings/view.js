import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Notification from 'actions/notification'
import { gql } from 'react-apollo'
import { connect } from 'react-redux'
import { Link } from 'lib/nav_link'
import { graphql } from 'react-apollo'

const deleteSettingQuery = gql`
  mutation deleteSetting($input: IdInput!) {
    deleteSetting(input: $input) {
      id
    }
  }
`

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
    const { dispatch, refetch, object, deleteSettingQuery } = this.props

    try {
      await deleteSettingQuery({
        variables: { id: object.id },
      })
      refetch()
    } catch (error) {
      dispatch(Notification.error(error))
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

        <td>
          <button className="btn">Update</button>
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
    deleteSettingQuery, { name: "deleteSettingQuery"}
  )(SettingView)
)
