import React, { Component } from 'react'

import FollowExplore from './follow_explore'
import LikeLenta from './like_lenta'

export default class Instagram extends Component {

  render() {
    return (
      <div className="text-center">
        <FollowExplore />
        <LikeLenta />
      </div>
    )
  }

}

