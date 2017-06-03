import React, { PropTypes, Component } from 'react'
import { observer } from 'mobx-react'
import { UIStore } from 'stores'
import { User, Tag } from "models"

import Select from 'react-select'
import { filter, sortBy } from "lodash"

import { Tabs, Tab, Button, Clearfix, Grid, Row, Col } from 'react-bootstrap'
import { NavLink } from 'nav_link'
import Notification from 'notification'
import Spinner from 'spinner'

export default class CreateGroup extends Component {

  async componentWillMount() {
    await Tag.loadAll({ kind: "users" })
    this.setState({loading: false })
  }

  state = {
    loading: true,
  }

  state = {
    user: {
      url: "",
      tag_id: "",
    },
    response: {
      first_name: "",
      last_name: "",
      followers_count: "",
      crop_photo_url: "",
    },
    create: false,
  }

  handleSetState = (e) => {
    const { name, value } = e.target
    let { user } = this.state

    user[name] = value
    this.setState({ user })
  }

  handleCreate = () => {
    const { user } = this.state

    User.create(user).then(response => {
      if (response.ok) {
        Notification.success("ok")
        this.setState({ response: response.body, create: true })
      }
    })
  }

  handleChangeTag = (val) => {
    let { user } = this.state
    user.tag_id = val.id
    this.setState({ user })
  }

  handleOnKeyPress = (target) => {
    target.charCode == 13 ?  this.handleCreate() : null
  }

  renderResponse() {
    let { response } = this.state

    return (
      <Col xs={12} className="text-center">

        first_name:
        &nbsp;
        { response.first_name }

        <br />

        last_name:
        &nbsp;
        { response.last_name }

        <br />

        followers_count:
        &nbsp;
        { response.followers_count }

        <br />

        <img className="avatar" src={ response.crop_photo_url } />

      </Col>
    )
  }


  renderView() {
    const tags = filter(Tag.all(), { kind: "users"})
    let { user, create } = this.state

    return (
      <div>
        <Col xs={12} className="text-center">

          Create new User
          <Clearfix />
          <br />

          <Col xs={6}>
            URL
          </Col>
          <Col xs={6}>
            <input
              name="url"
              className="form-control"
              onChange={ this.handleSetState }
              onKeyPress={ this.handleOnKeyPress }
            />
          </Col>

          <Clearfix />
          <br />

          <Col xs={6}>
            Tag
          </Col>
          <Col xs={6}>
            <Select
              name="form-field-name"
              value={user.tag_id}
              options={tags}
              onChange={this.handleChangeTag}
              valueKey="id"
              labelKey="name"
            />
          </Col>

        </Col>

        <Clearfix />
        <br />

        <div className="text-center">
          <Button onClick={this.handleCreate}>
            Save
          </Button>
          &nbsp;
          <NavLink to="/users">
            <Button>
              Return
            </Button>
          </NavLink>
        </div>

        <br />
        <br />
        { create ? this.renderResponse() : null }

      </div>
    )
  }

  render() {
    return this.state.loading ? Spinner() : this.renderView()
  }

}
