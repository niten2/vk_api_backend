import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { Link } from 'lib/nav_link'
import Notification from 'lib/notification'
// import Spinner from 'components/shared/spinner'

import { InputGroup, Input, Container, Row, Col, Button } from 'reactstrap'

import { clientCreateQuery, clientsQuery } from 'components/crm/querues'

class ClientNew extends Component {

  state = {
    client: {},
  }

  handleSetState = (e) => {
    const { name, value } = e.target
    let { client } = this.state
    client[name] = value
    this.setState({ client })
  }

  handleCreate = async () => {
    const { clientCreateQuery } = this.props
    const { client } = this.state

    try {
      await clientCreateQuery({
        variables: {
          name: client.name,
          number: client.number,
          phone: client.phone,
          note: client.note,
          date_birth: client.date_birth,
        },
        refetchQueries: [{
          query: clientsQuery,
        }],
      })
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
    return (
      <Container>
        <br />
        <br />

        <InputGroup>
          <Input
            name="name"
            onChange={ this.handleSetState }
            onKeyPress={ this.handleOnKeyPress }
            placeholder="name"
          />
        </InputGroup>
        <br />

        <InputGroup>
          <Input
            name="number"
            onChange={ this.handleSetState }
            onKeyPress={ this.handleOnKeyPress }
            placeholder="number"
          />
        </InputGroup>
        <br />

        <InputGroup>
          <Input
            name="phone"
            onChange={ this.handleSetState }
            onKeyPress={ this.handleOnKeyPress }
            placeholder="phone"
          />
        </InputGroup>
        <br />

        <InputGroup>
          <Input
            name="note"
            onChange={ this.handleSetState }
            onKeyPress={ this.handleOnKeyPress }
            placeholder="note"
          />
        </InputGroup>
        <br />

        <InputGroup>
          <Input
            name="date_birth"
            onChange={ this.handleSetState }
            onKeyPress={ this.handleOnKeyPress }
            placeholder="date_birth"
          />
        </InputGroup>
        <br />

        <br />
        <br />

        <Row>
          <Col xs={{ size: "auto", offset: 5 }}>
            <Button onClick={this.handleCreate}>
              Save
            </Button>

            &nbsp;

            <Link to="/crm/clients">
              <Button>
                Return
              </Button>
            </Link>
          </Col>
        </Row>

      </Container>
    )
  }

}

export default graphql(clientCreateQuery, {
  name: "clientCreateQuery"
})(ClientNew)
