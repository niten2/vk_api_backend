import React, { Component } from 'react'
import Notification from 'actions/notification'
import { connect } from 'react-redux'
import { gql, graphql } from 'react-apollo'
import { InputField } from 'components/shared/default_components'
import { pagination } from "lib/pagination"

const statusesQuery = gql`
  query statuses($pagination: PaginationInput) {
    statuses(pagination: $pagination) {
      id
      name
    }
    meta(input: { name: "Status" }) {
      count
    }
  }
`
const createStatusQuery = gql`
  mutation createStatus($input: StatusInput!) {
    createStatus(input: $input) {
      id
    }
  }
`

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
        refetchQueries: [{
          query: statusesQuery, variables: {
            pagination: pagination(this.props)
          }
        }],
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

const mapStateToProps = (props) => {
  return {
    perPage: props.settings.perPage,
  }
}

export default connect(mapStateToProps)(
  graphql(createStatusQuery, {
    name: "createStatusQuery",
  })(NewStatus)
)
