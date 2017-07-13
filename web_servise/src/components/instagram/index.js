import React, { Component } from 'react'
import { Center } from "assets/styled"
import FollowExplore from './follow_explore'
import LikeLenta from './like_lenta'

export default class Instagram extends Component {

  render() {
    return (
      <Center>
        <br />
        <FollowExplore />
        <br />
        <br />
        <LikeLenta />
        <br />
      </Center>
    )
  }

}

