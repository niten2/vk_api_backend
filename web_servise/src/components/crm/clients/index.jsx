import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { Container, Col, Button } from 'reactstrap'
import Spinner from 'components/shared/spinner'
import { NavLink } from 'lib/nav_link'

// import { Client } from "models"
// import { compact, sortBy } from "lodash"
// import ClientView from './client_view'

export default observer(class Index extends Component {

  // async componentWillMount () {
  //   await Client.loadAll({ page: { number: 1, size: 50} })
  //   this.setState({loading: false })
  // }

  state = {
    loading: true,
  }

  renderView() {

    return (
      <Container>

        <Col xs={6}>
          <h1> Clients </h1>
        </Col>

        <Col xs={12}>

          <Col xs={1}>
            ID
          </Col>
          <Col xs={2}>
            Name
          </Col>
          <Col xs={2}>
            phone
          </Col>
          <Col xs={2}>
            date_birth
          </Col>
          <Col xs={4}>
            note
          </Col>

          <br />
          <br />


        </Col>

        <br />
        <br />


        <div>
          <NavLink to="/crm/clients/new">
            <Button>
              New
            </Button>
          </NavLink>
        </div>

      </Container>
    )
  }

  render() {
    return this.state.loading ? Spinner() : this.renderView()
  }

})
          // { compact(Client.all()).map((object, index) =>
          //   <ClientView key={index} object={object} />
          // )}
