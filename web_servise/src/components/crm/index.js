import React, { Component } from 'react'
import ListClients from './clients/list'
import { Center } from "assets/styled"

export default class Index extends Component {

  render() {
    return (
      <Center>
        <br />
        <ListClients />
      </Center>
    )
  }

}

