import React, { Component } from 'react'
import Notification from 'actions/notification'
import { connect } from 'react-redux'
import { compose, graphql } from 'react-apollo'
// import { createStatusQuery, statusesQuery } from 'components/crm/graphql/querues'
import { createStatusQuery } from 'components/crm/graphql/querues'
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
    const { dispatch, createStatusQuery } = this.props

    try {
      await createStatusQuery({
        variables: {
          input: {
            name: status.name,
          }
        },
        // refetchQueries: [{
        //   query: statusesQuery,
        // }],
      })
      this.setState({ status: { name: "" } })
      dispatch(Notification.success("ok"))
    } catch (err) {
      dispatch(Notification.error(err.message))
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
    let { status, attributes } = this.state

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

export default connect()(
  compose(
    graphql(createStatusQuery, {
      name: "createStatusQuery",
    }),
    // graphql(statusesQuery, {
    //   name: "statusesQuery"
    // }),
  )(NewStatus)
)
