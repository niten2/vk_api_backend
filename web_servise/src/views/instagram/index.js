import React, { PropTypes, Component } from 'react'
// import { observer } from 'mobx-react'
// import { UIStore } from 'stores'
// import { PromiseLoadAll } from "helpers/promise"
// import { Post } from "models"

// import { Button, Clearfix, Grid, Row, Col } from 'react-bootstrap'
// import { NavLink } from 'nav_link'
import FollowExplore from './follow_explore'

import { Button } from 'styles'
import { requestLikeLenta, requestFollowExplore } from "lib/requests"


export default class Index extends Component {


  async handeClickLikeLenta () {
    try {
      await requestLikeLenta({ quit: 'true' })
      Notification.success("ready")
    } catch (err) {
      Notification.error(err)
    }
  }

  render() {
    return (
      <div className="text-center">
        <FollowExplore />


        <h1> requestLikeLenta </h1>
        <Button onClick={ this.handeClickLikeLenta }>run requestLikeLenta</Button>

      </div>
    )
  }

}

