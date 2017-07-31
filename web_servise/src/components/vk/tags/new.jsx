import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { UIStore } from 'stores'
import Notification from 'lib/notification'
import { graphql, withApollo } from 'react-apollo'
import { createTagQuery, tagsQuery } from 'components/vk/graphql/querues'

const InputField = (props) => {
  return (
    <div className="form-group row">
      <div className="col-md-12">
        <div className="input-group">
          <span className="input-group-addon">{ props.name }</span>
          <input
            className="form-control"
            name={ props.name }
            placeholder={ props.name }
            onChange={ props.onChange }
            value={ props.value || ""}
            onKeyPress={props.onKeyPress}
          />
        </div>
      </div>
    </div>
  )
}

class New extends Component {

  static propTypes = {
    refetch: PropTypes.func.isRequired,
    createTagQuery: PropTypes.func.isRequired,
  }

  state = {
    open: true,
    group: {},
    attributes: [
      "name",
      "status",
    ]
  }

  query = async (name) => {
    const result = await this.props.client.query({
      query: tagsQuery,
      variables: {
        filter: { name: UIStore.tags.query || null }
      },
    })
    UIStore.tags.tags = result.data.tags
  }

  handleSetState = (e) => {
    const { name, value } = e.target
    let { group } = this.state
    group[name] = value
    this.setState({ group })
  }

  handleCreate = async (e) => {
    e.preventDefault()
    const { createTagQuery, refetch } = this.props
    const { group } = this.state

    try {
      await createTagQuery({
        variables: {
          input: group,
        },
      })
      refetch()
      this.setState({ group: {} })
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
    if (target.charCode === 13) { this.handleCreate() }
  }

  handleCard = () => {
    this.setState({ open: !this.state.open })
  }

  renderCardBlock = () => {
    let { group, attributes } = this.state
    return (
      <div className="card-block">
        <form className="form-2orizontal">

          { attributes.map((attribute, index) =>
            <InputField
              key={index}
              onChange={this.handleSetState.bind(this)}
              value={group[attribute]}
              onKeyPress={ this.handleOnKeyPress.bind(this) }
              name={attribute}
            />
          )}

          <div className="form-actions">
            <button
              className="btn btn-primary"
              onClick={this.handleCreate}
            >Save changes</button>

            &nbsp;

            <button
              onClick={this.handleCard}
              className="btn btn-default"
            >Cancel</button>
          </div>

        </form>
      </div>
    )
  }

  render() {
    const { open } = this.state

    return (
      <div className="row">
        <div className="col-lg-12">

          <div className="card">

            <div className="card-header">
              <i className="pointer fa fa-align-justify"/> Create Tag
              <div className="card-actions pointer ">
                <a onClick={this.handleCard} className="btn-minimize">
                  <i className={ open ? "icon-arrow-up" : "icon-arrow-down"} />
                </a>
              </div>
            </div>

            { open ? this.renderCardBlock() : null }

          </div>
        </div>
      </div>
    )
  }

}

export default graphql(
  createTagQuery, { name: "createTagQuery" }
)(withApollo(New))
