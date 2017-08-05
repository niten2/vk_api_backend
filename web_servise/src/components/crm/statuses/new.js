import React, { Component } from 'react'
import Notification from 'lib/notification'
import { compose, graphql } from 'react-apollo'
import { createStatusQuery, statusesQuery } from 'components/crm/graphql/querues'
import { InputField } from 'components/shared/default_components'

class NewStatus extends Component {

  state = {
    status: {},
    attributes: [
      "name",
    ]
  }

  handleSetState = (e) => {
    const { name, value } = e.target
    let { status } = this.state
    status[name] = value
    this.setState({ status })
  }

  handleCreate = async (e) => {
    e.preventDefault()
    const { status } = this.state
    const { createStatusQuery, statusesQuery } = this.props

    try {
      await createStatusQuery({
        variables: {
          input: {
            name: status.name,
          }
        },
      })
      await statusesQuery.refetch()
      this.setState({ status: { name: "" } })
      Notification.success("ok")
    } catch (e) {
      Notification.error(e)
    }
  }

  handleChangeTag = (val) => {
    let { group } = this.state
    group.tag_id = val.id
    this.setState({ group })
  }

  handleOnKeyPress = (target) => {
    if (target.charCode === 13) {
      this.handleCreate()
    }
  }

  render() {
    console.log(this.props)
    let { status, attributes } = this.state
    console.log(this.state.status)
    return (
      <div className="col-lg-6">

        <div className="card">

          <div className="card-header">
            <i className="fa fa-align-justify"></i> New Status
          </div>

          <div className="card-block">
            <form className="form-2orizontal">

              { attributes.map((attribute, index) =>
                <InputField
                  key={index}
                  onChange={this.handleSetState.bind(this)}
                  onKeyPress={ this.handleOnKeyPress.bind(this) }
                  name={attribute}
                  value={status[attribute]}
                />
              )}

              <div className="form-actions">
                <button
                  className="btn btn-primary"
                  onClick={this.handleCreate}
                >
                  Save changes
                </button>

              </div>
            </form>

          </div>

        </div>
      </div>
    )
  }

}

export default compose(
  graphql(createStatusQuery, {
    name: "createStatusQuery",
  }),
  graphql(statusesQuery, {
    name: "statusesQuery"
  }),
)(NewStatus)
