import React, { PropTypes, Component } from 'react'
import { observer } from 'mobx-react'
// import { UIStore } from 'stores'
// import { Group, Tag } from "models"

// import Select from 'react-select'
// import { sortBy } from "lodash"

import { Tabs, Tab, Button, Clearfix, Grid, Row, Col } from 'react-bootstrap'
// import { NavLink } from 'nav_link'
// import Notification from 'notification'
// import Spinner from 'spinner'

export default class GroupView extends Component {

  render() {
    let { object } = this.props

    return (
      <div>
        <Col xs={1}>
          { object.id }
        </Col>

        <Col xs={2} className="pointer" onClick={this.handleColor}>
          { object.name }
        </Col>

        <Col xs={2}>
          { object.phone }
        </Col>

        <Col xs={2}>
          { object.date_birth }
        </Col>

        <Col xs={4}>
          { object.note }
        </Col>

        <Clearfix />
        <br />
      </div>
    )
  }

}

