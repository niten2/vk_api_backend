import React, { PropTypes, Component } from 'react'
import { Button } from 'styles'
import { requestFollowExplore } from "lib/requests"
import Notification from 'notification'

export default class FollowExplore extends Component {

  async handeClick () {
    try {
      await requestFollowExplore({ quit: 'true' })
      Notification.success("ready")
    } catch (err) {
      Notification.error(err)
    }
  }

  render() {
    return (
      <div className="text-center">

        <h1> FollowExplore </h1>
        <Button onClick={ this.handeClick }>run FollowExplore</Button>

      </div>
    )
  }

}

