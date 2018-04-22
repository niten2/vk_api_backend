import React, { Component } from 'react'
import { Button } from 'reactstrap'
// import { requestLikeLenta } from "lib/requests"
// import Notification from 'actions/notification'

export default class FollowExplore extends Component {

  async handeClick () {
    console.log("handeClick")
    // try {
    //   await requestLikeLenta({ quit: 'true' })
    //   // Notification.success("ready")
    // } catch (err) {
    //   // Notification.error(err)
    // }
  }

  render() {
    return (
      <div>
        <Button onClick={ this.handeClick }>run requestLikeLenta</Button>
      </div>
    )
  }

}

