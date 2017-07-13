import React, { Component } from 'react'

import { requestLikeLenta } from "lib/requests"
import { Button } from 'reactstrap'
import Notification from 'lib/notification'

export default class FollowExplore extends Component {

  async handeClick () {
    try {
      await requestLikeLenta({ quit: 'true' })
      Notification.success("ready")
    } catch (err) {
      Notification.error(err)
    }
  }

  render() {
    return (
      <div>
        <Button onClick={ this.handeClick }>run requestLikeLenta</Button>
      </div>
    )
  }

}

