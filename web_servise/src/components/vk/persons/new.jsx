import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import Notification from 'actions/notification'
import { graphql } from 'react-apollo'
import { createPersonQuery } from 'components/vk/graphql/querues'

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
    createPersonQuery: PropTypes.func.isRequired,
  }

  state = {
    open: false,
    person: {},
    attributes: [
      "uid",
      "first_name",
      "last_name",
      "followers_count",
      "sex",
      "city",
      "bdate",
      "crop_photo_url",
      "status",
    ]
  }

  handleSetState = (e) => {
    const { name, value } = e.target
    let { person } = this.state
    person[name] = value
    this.setState({ person })
  }

  handleCreate = async (e) => {
    e.preventDefault()
    const { createPersonQuery, refetch } = this.props
    const { person } = this.state

    try {
      await createPersonQuery({
        variables: {
          input: person,
        },
      })
      refetch()
      // Notification.success("ok")
    } catch (e) {
      // Notification.error(e)
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
    const { attributes } = this.state
    return (
      <div className="card-block animated fadeIn">
        <form className="form-2orizontal">

          { attributes.map((attribute, index) =>
            <InputField
              key={index}
              onChange={this.handleSetState.bind(this)}
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
              <i className="pointer fa fa-align-justify"/> Create Person
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

export default graphql(createPersonQuery, { name: "createPersonQuery" })(New)
