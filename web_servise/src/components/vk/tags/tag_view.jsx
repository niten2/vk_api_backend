import React, { PropTypes, Component } from 'react'
import { observer } from 'mobx-react'
import { UIStore } from 'stores'
import { Group, Tag } from "models"

import Select from 'react-select'
import { sortBy } from "lodash"

import { Tabs, Tab, Button, Clearfix, Grid, Row, Col } from 'react-bootstrap'
import { NavLink } from 'nav_link'
import Notification from 'notification'
import Spinner from 'spinner'

export default class TagView extends Component {

  handleDestroy = () => {
    let { object } = this.props
    object.destroy().then(response => {
      Notification.success("ok")
    })
  }

  render() {
    let { object } = this.props
    return (
      <div>
        <Col xs={1}>
          { object.id }
        </Col>
        <Col xs={3}>
          { object.name }
        </Col>

        <Col xs={3}>
          <Button onClick={this.handleDestroy}>
            destroy
          </Button>
        </Col>

        <Clearfix />
      </div>
    )
  }

}

