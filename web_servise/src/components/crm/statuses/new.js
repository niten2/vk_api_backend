import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import Notification from 'lib/notification'
import { statusCreateQuery, statusesQuery } from 'components/crm/graphql/querues'

class New extends Component {

  state = {
    status: { name: ""},
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

    try {
      await this.props.statusCreateQuery({
        variables: {
          name: status.name,
        },
        refetchQueries: [{
          query: statusesQuery,
        }],
      })
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
    let { status } = this.state
    return (
      <div className="col-lg-6">

        <div className="card">

          <div className="card-header">
            <i className="fa fa-align-justify"></i> New Status
          </div>

          <div className="card-block">
            <form className="form-2orizontal">

              <div className="form-group row">
                <div className="col-md-12">
                  <div className="input-group">
                    <span className="input-group-addon">Name</span>
                    <input
                      className="form-control"
                      name="name"
                      onChange={ this.handleSetState }
                      onKeyPress={ this.handleOnKeyPress }
                      placeholder="name"
                      value={status.name}
                    />
                  </div>
                </div>
              </div>

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

export default graphql(statusCreateQuery, {
  name: "statusCreateQuery"
})(New)
