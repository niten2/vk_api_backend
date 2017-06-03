import React, { PropTypes, Component } from 'react'
import { observer } from 'mobx-react'
import { UIStore } from 'stores'
import { Group, Tag } from "models"

import Select from 'react-select'
import { filter, sortBy } from "lodash"

import { Tabs, Tab, Button, Clearfix, Grid, Row, Col } from 'react-bootstrap'
import { NavLink } from 'nav_link'
import Notification from 'notification'
import Spinner from 'spinner'

export default class CreateGroup extends Component {

  async componentWillMount() {
    await Tag.loadAll({kind: "groups"})
    this.setState({loading: false })
  }

  state = {
    loading: true,
  }


  state = {
    group: {
      url: "",
      tag_id: "",
    },
    responses: {},
    create: false,
  }

  handleSetState = (e) => {
    const { name, value } = e.target
    let { group } = this.state

    group[name] = value
    this.setState({ group })
  }

  handleCreate = () => {
    const { group } = this.state

    Group.create(group).then(response => {
      console.log(response)
      if (response.ok) {
        Notification.success("ok")
        this.setState({ responses: response.body, create: true })
      }
    })
  }

  handleChangeTag = (val) => {
    let { group } = this.state
    group.tag_id = val.id
    this.setState({ group })
  }

  handleOnKeyPress = (target) => {
    target.charCode == 13 ?  this.handleCreate() : null
  }

  renderResponse() {
    let { responses } = this.state

    console.log(responses)
    return (
      <Col xs={12} className="text-center">
        { responses.map((response, index) =>
            <div key={index}>
              screen_name:
              &nbsp;
              { response.screen_name }

              <br />

              name:
              &nbsp;
              { response.name }

              <br />

              members count:
              &nbsp;
              { response.members_count }
            <br />
            <br />
            </div>
          )
        }

      </Col>
    )
  }


  renderView() {
    const tags = filter(Tag.all(), { kind: "groups"})

    let { group, create } = this.state

    return (
      <div>
        <Col xs={12} className="text-center">

          Create new Group
          <Clearfix />
          <br />

          <Col xs={6}>
            URL
          </Col>
          <Col xs={6}>
            <textarea
              name="url"
              rows="10"
              cols="45"
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
              value={group.tag_id}
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
          <NavLink to="/groups">
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

