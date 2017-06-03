import React, { PropTypes, Component } from 'react'
import { observer } from 'mobx-react'
import { UIStore } from 'stores'
import { Group, Tag } from "models"

import Select from 'react-select'
import { sortBy } from "lodash"

import { Tabs, Tab, Button, Clearfix, Grid, Row, Col } from 'react-bootstrap'
import { NavLink } from 'nav_link'
import Notification from 'notification'
import Spinner from 'spinner'

export default class CreateGroup extends Component {

  state = {
    loading: true,
  }

  state = {
    tag: {
      name: "",
      kind: "",
    },
    select: {
      name: "groups",
      value: "groups",
    },
    options: [
      { name: "groups", value: "groups" },
      { name: "users", value: "users" },
    ]
  }

  handleSetState = (e) => {
    const { name, value } = e.target
    let { tag } = this.state

    tag[name] = value
    this.setState({ tag })
  }

  handleChangeTag = (value) => {
    this.setState({ select: value })
  }

  handleCreate = () => {
    const { tag, select } = this.state
    tag.kind = select.value

    Tag.create(tag).then(response => {
      if (response.ok) {
        Notification.success("ok")
      }
    })
  }

  handleOnKeyPress = (target) => {
    target.charCode == 13 ?  this.handleCreate() : null
  }

  renderView() {
    let { options, select } = this.state

    return (
      <div>
        <Col xs={12} className="text-center">

          Create new Tag
          <Clearfix />
          <br />

          <Col xs={6}>
            Name
          </Col>
          <Col xs={6}>
            <input
              name="name"
              className="form-control"
              onChange={ this.handleSetState }
              onKeyPress={ this.handleOnKeyPress }
            />
          </Col>

          <Clearfix />
          <br />

          <Col xs={6}>
            Kind
          </Col>
          <Col xs={6}>
            <Select
              name="form-field-name"
              value={select}
              options={options}
              onChange={this.handleChangeTag}
              valueKey="value"
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
          <NavLink to="/tags">
            <Button>
              Return
            </Button>
          </NavLink>
        </div>

        <br />
        <br />

      </div>
    )
  }

  render() {
    return this.state.loading ? Spinner() : this.renderView()
  }


}

