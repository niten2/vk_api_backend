import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { Row, Col, Button } from 'reactstrap'
import { NavLink } from 'lib/nav_link'
import Notification from 'lib/notification'
// import Spinner from 'components/shared/spinner'

import { ClientAddQuery } from 'components/crm/querues'

class ClientNew extends Component {

  state = {
    client: {
      name: "",
    },
  }

  handleSetState = (e) => {
    const { name, value } = e.target
    let { client } = this.state
    client[name] = value
    this.setState({ client })
  }

  handleCreate = async () => {
    const { mutate } = this.props
    const { client } = this.state

    let response = await mutate({
      variables: { name: client.name },
    })

    if (response.data.addClient) {
      Notification.success("ok")
    }
  }

  handleChangeTag = (val) => {
    let { group } = this.state
    group.tag_id = val.id
    this.setState({ group })
  }

  handleOnKeyPress = (target) => {
    target.charCode === 13 ?  this.handleCreate() : null
  }

  renderView() {
    return (
      <Row>
        <Col xs={12} className="text-center">

          Create new Group
          <br />

          <Col xs={{ size: 4, offset: 4 }}>
            Name
          </Col>
          <Col xs={{ size: 4, offset: 4 }}>
            <input
              name="name"
              className="form-control"
              onChange={ this.handleSetState }
              onKeyPress={ this.handleOnKeyPress }
            />
          </Col>

        </Col>

        <br />
        <br />

        <Col xs={{ size: 4, offset: 6 }}>
          <br />
          <Button onClick={this.handleCreate}>
            Save
          </Button>

          <NavLink to="/crm/clients">
            <Button>
              Return
            </Button>
          </NavLink>
        </Col>

      </Row>
    )
  }

  render() {
    return this.renderView()
  }

}

export default graphql(ClientAddQuery)(ClientNew)
