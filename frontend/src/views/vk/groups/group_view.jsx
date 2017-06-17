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

export default class GroupView extends Component {

  state = {
    active: false,
  }

  handleDestroy = () => {
    let { object } = this.props
    object.destroy().then(response => {
      Notification.success("ok")
    })
  }

  handleColor = () => {
    let { active } = this.state
    this.setState({ active: !active })
  }

  render() {
    let { object } = this.props
    let { active } = this.state

    return (
      <div className={ active ? "color-red" : null }>
        <Col xs={1}>
          { object.id }
        </Col>

        <Col xs={3} className="pointer" onClick={this.handleColor}>
          { object.screen_name }
        </Col>

        <Col xs={4}>
          <a href={`http://vk.com/club${object.gid}`} target="_blank">{object.name}</a>
        </Col>

        <Col xs={1}>
          { object.members_count }
        </Col>

        <Col xs={2}>
          { object.note }
        </Col>

        <Col xs={1}>
          <button onClick={this.handleDestroy}>
            <i className="fa fa-ban" aria-hidden="true" />
          </button>
        </Col>

        <Clearfix />
        <br />
      </div>
    )
  }

}

