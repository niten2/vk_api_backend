import React, { PropTypes, Component } from 'react'
import { observer } from 'mobx-react'
import { UIStore } from 'stores'
import { Client } from "models"

import { Tabs, Tab, Button, Clearfix, Grid, Row, Col } from 'react-bootstrap'

import { NavLink } from 'nav_link'
import Notification from 'notification'
import Spinner from 'spinner'

export default class UpdateClient extends Component {

  async componentWillMount() {
    let id = this.props.params.id
    await Client.loadObject(id)

    let client = await Client.get(id)
    console.log(client)
    this.setState({client: client, loading: false })
  }

  state = {
    client: {
      name: "",
    },
    loading: true,
  }

  handleSetState = (e) => {
    const { name, value } = e.target
    let { client } = this.state
    client[name] = value
    this.setState({ client })
  }

  handleUpdate = async () => {
    const { client } = this.state
    let response = await Client.updateObject(client)

    if (response.ok) {
      Notification.success("ok")
    } else {
      Notification.errors(response.body)
    }
  }

  handleOnKeyPress = (target) => {
    target.charCode == 13 ?  this.handleCreate() : null
  }

  renderView() {
    let { client } = this.state

    console.log(client)

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
              value={ client.name }
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

