import React, { Component } from 'react'
import { Row } from 'reactstrap'
import ListClients from './clients/list'

export default class Index extends Component {

  render() {
    return (
      <Row>
        <ListClients />
      </Row>
    )
  }

}

