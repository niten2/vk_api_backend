import React, { PropTypes, Component } from 'react'
import { observer } from 'mobx-react'

import { Tabs, Tab, Button, Clearfix, Grid, Row, Col } from 'react-bootstrap'
import Notification from 'notification'
import { NavLink } from 'nav_link'

export default class GroupView extends Component {

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

        <Col xs={2} className="pointer" onClick={this.handleColor}>

          <NavLink to={`/crm/clients/${object.id}/update`}>
            <button>
              { object.name }
            </button>
          </NavLink>

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

