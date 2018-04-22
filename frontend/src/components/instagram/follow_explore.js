import React, { Component } from 'react'
import { Button } from 'reactstrap'
// import { requestFollowExplore } from "lib/requests"
// import Notification from 'actions/notification'

class FollowExplore extends Component {

  async handeClick () {
    console.log("handeClick")
    // try {
    //   // await requestFollowExplore({ quit: 'true' })
    //   Notification.success("ready")
    // } catch (err) {
    //   // Notification.error(err)
    // }
  }

  render() {
    return (
      <Button onClick={this.handeClick}>
        run FollowExplore
      </Button>
    )
  }

}

export default FollowExplore
