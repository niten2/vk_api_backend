import React, { PropTypes, Component } from 'react'
import { UIStore } from 'stores'
import { User } from "models"

import { Button, Clearfix, Col } from 'react-bootstrap'
import { NavLink } from 'nav_link'
import Notification from 'notification'
import { handeDelete } from "helpers/promise"

class ModelView extends Component {

  render() {
    let { object } = this.props
    return render(object)
  }

}

const render = (object) => (
  <div>
    <Col xs={4}>
      Email:
    </Col>
    <Col xs={4}>
      { object.email }
    </Col>

    <br />

    <Col xs={4}>
      Password:
    </Col>
    <Col xs={4}>
      { object.password }
    </Col>

    <br />

    <Col xs={4}>
      Token:
    </Col>
    <Col xs={4}>
      { object.token }
    </Col>

    <br />
    <br />
  </div>
)

const renderModelView = (object, index) => (
  <ModelView
    key={index}
    object={object}
  />
)

const renderModelViews = () => (
  User.all().map((object, index) => renderModelView(object, index) )
)

export default renderModelViews
