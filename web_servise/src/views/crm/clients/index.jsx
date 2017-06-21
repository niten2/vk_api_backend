import React, { PropTypes, Component } from 'react'
import { observer } from 'mobx-react'
import { Client } from "models"

import { Tabs, Tab, Button, Clearfix, Grid, Row, Col } from 'react-bootstrap'
import Spinner from 'spinner'
import ClientView from './clientView'
import { compact, sortBy } from "lodash"


@observer
export default class Index extends Component {

  async componentWillMount () {
    await Client.loadAll({ page: { number: 1, size: 50} })
    this.setState({loading: false })
  }

  state = {
    loading: true,
  }

  renderView() {

    return (
      <Grid>

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

          <Clearfix />
          <br />
          <br />

          { compact(Client.all()).map((object, index) =>
            <ClientView key={index} object={object} />
          )}

        </Col>

        <Clearfix />
        <br />
        <br />

      </Grid>
    )
  }

  render() {
    return this.state.loading ? Spinner() : this.renderView()
  }

}

