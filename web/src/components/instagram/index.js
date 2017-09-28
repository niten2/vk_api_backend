import React, { Component } from 'react'

import Layout from 'components/shared/layout'
import FollowExplore from './follow_explore'
import LikeLenta from './like_lenta'

export default class Instagram extends Component {

  render() {
    return (
      <div>
        <br />
        <FollowExplore />
        <br />
        <br />
        <LikeLenta />
        <br />
      </div>
    )
  }

}

