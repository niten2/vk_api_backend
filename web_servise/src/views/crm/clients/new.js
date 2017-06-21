import React, { PropTypes, Component } from 'react'
import { observer } from 'mobx-react'
import { UIStore } from 'stores'
import { Client } from "models"

// import Select from 'react-select'
// import { filter, sortBy } from "lodash"

import { Tabs, Tab, Button, Clearfix, Grid, Row, Col } from 'react-bootstrap'

import { NavLink } from 'nav_link'
import Notification from 'notification'
import Spinner from 'spinner'

export default class CreateGroup extends Component {

  async componentWillMount() {
    // await Tag.loadAll({kind: "groups"})
    this.setState({loading: false })
  }

  state = {
    loading: true,
  }

  state = {
    client: {
      name: "dsfsdfdsf",
    },
    responses: {},
    create: false,
  }

  handleSetState = (e) => {
    const { name, value } = e.target
    let { client } = this.state
    client[name] = value
    this.setState({ client })
  }

  handleCreate = async () => {
    const { client } = this.state
    let response = await Client.createObject(client)

    if (response.ok) {
      Notification.success("ok")
    } else {
      Notification.errors(response.body)
    }
  }

  handleChangeTag = (val) => {
    let { group } = this.state
    group.tag_id = val.id
    this.setState({ group })
  }

  handleOnKeyPress = (target) => {
    target.charCode == 13 ?  this.handleCreate() : null
  }

  renderView() {
    let { client } = this.state

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
              name="name"
              rows="10"
              cols="10"
              className="form-control"
              onChange={ this.handleSetState }
              onKeyPress={ this.handleOnKeyPress }
            />
          </Col>

          <Clearfix />
          <br />


        </Col>

        <Clearfix />
        <br />

        <div className="text-center">
          <Button onClick={this.handleCreate}>
            Save
          </Button>
          &nbsp;
          <NavLink to="/crm/clients">
            <Button>
              Return
            </Button>
          </NavLink>
        </div>

      </div>
    )
  }

  render() {
    return this.state.loading ? Spinner() : this.renderView()
  }


}

