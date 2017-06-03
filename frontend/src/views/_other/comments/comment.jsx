import React, { PropTypes, Component } from 'react'
import { UIStore } from 'stores'
import { Comment } from "models"

import { Button, Clearfix, Col } from 'react-bootstrap'
import { NavLink } from 'nav_link'
import Notification from 'notification'
import { handeDelete } from "helpers/promise"

class ModelView extends Component {

  render() {
    let { object } = this.props
    console.log((object.post || {}).name)
    return render(object)
  }

}

const render = (object) => (
  <div>
    <Col xs={3}>
      Body:
    </Col>
    <Col xs={3}>
      { object.body }
    </Col>

    <Col xs={3}>
      Post Id:
    </Col>
    <Col xs={3}>
      { (object.post || {})._id }
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
  Comment.all().map((object, index) => renderModelView(object, index) )
)

export default renderModelViews
