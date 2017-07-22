import React, { Component } from 'react'
import { InputGroup, Input, Container, Row, Col, Button } from 'reactstrap'
import { Link } from 'lib/nav_link'
import { compose, graphql } from 'react-apollo'
import { clientQuery, clientUpdate } from 'components/crm/graphql/querues'
import Spinner from 'components/shared/spinner'
import Notification from 'lib/notification'
import { set, lensProp } from 'ramda'

class Update extends Component {

  componentWillReceiveProps(props) {
    const { client } = props.data
    this.setState({ client })
  }

  state = {
    client: {},
  }

  handleSetState = (e) => {
    const { name, value } = e.target
    let setClient = set(lensProp(name), value)
    this.setState({ client: setClient(this.state.client) })
  }

  handleUpdate = async () => {
    const { client } = this.state
    const { clientUpdate } = this.props

    try {
      await clientUpdate({
        variables: {
          id: this.props.match.params.id,
          number: client.number,
          name: client.name,
          phone: client.phone,
          note: client.note,
          date_birth: client.date_birth,
        },
      })
      Notification.success("update")
    } catch (error) {
      Notification.error(error)
    }
  }

  handleOnKeyPress = (target) => {
    if (target.charCode === 13) { this.handleUpdate() }
  }

  render() {
    let { client } = this.state
    let { loading, error } = this.props.data

    if (loading) {
      return <Spinner />
    }

    if (error) {
      Notification.error(error.message)
      return (<div> Error </div>)
    }

    if (client) {
      return (
        <Container>
          <br />
          <br />

        <InputGroup>
          <Input
            name="name"
            placeholder="name"
            value={client.name || ""}
            onChange={ this.handleSetState }
            onKeyPress={ this.handleOnKeyPress }
          />
        </InputGroup>
        <br />

        <InputGroup>
          <Input
            name="number"
            onChange={ this.handleSetState }
            onKeyPress={ this.handleOnKeyPress }
            placeholder="number"
            value={client.number || ""}
          />
        </InputGroup>
        <br />

        <InputGroup>
          <Input
            name="phone"
            onChange={ this.handleSetState }
            onKeyPress={ this.handleOnKeyPress }
            placeholder="phone"
            value={client.phone || ""}
          />
        </InputGroup>
        <br />

        <InputGroup>
          <Input
            name="note"
            placeholder="note"
            value={client.note || ""}
            onChange={ this.handleSetState }
            onKeyPress={ this.handleOnKeyPress }
          />
        </InputGroup>
        <br />

        <InputGroup>
          <Input
            name="date_birth"
            placeholder="date_birth"
            value={client.date_birth || ""}
            onChange={ this.handleSetState }
            onKeyPress={ this.handleOnKeyPress }
          />
        </InputGroup>
        <br />

        <br />
        <br />

          <Row>
            <Col xs={{ size: "auto", offset: 5 }}>
              <Button onClick={ this.handleUpdate }>
                Update
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

}

export default compose(
  graphql(clientQuery, {
    options: (props) => ({ variables: { id: props.match.params.id } })
  }),
  graphql(clientUpdate, {
    name: "clientUpdate"
  }),
)(Update)
