import React, { PropTypes, Component } from 'react'
import { observer } from 'mobx-react'
import { UIStore } from 'stores'
import { User, Tag } from "models"

import { size, sortBy } from "lodash"
import Select from 'react-select'

import { Tabs, Tab, Button, Clearfix, Grid, Row, Col } from 'react-bootstrap'
import { NavLink } from 'nav_link'
import Notification from 'notification'
import Spinner from 'spinner'

export default class UserView extends Component {

  handlerInactive = () => {
    let { object } = this.props
    User.setInactive({ id: object.id })
  }

  render() {
    let { object } = this.props
    return (
      <div>
      <div className="user-border">

        <Col xs={1} className="down">
          { object.id }
        </Col>

        <Col xs={2}>
          <img className="avatar" src={object.crop_photo_url} />
        </Col>

        <Col xs={3} className="down">
          <a href={`http://vk.com/id${object.uid}`} target="_blank">
            { object.first_name }
            &nbsp;
            { object.last_name }
          </a>
        </Col>

        <Col xs={1} className="down">
          { object.followers_count }
        </Col>

        <Col xs={1} className="down">
          { object.sex == 1 ? "women" : "men" }
        </Col>

        <Col xs={1} className="down">
          { object.city == 73 ? "krsk" : "other" }
        </Col>

        <Col xs={1} className="down">
          { object.bdate }
        </Col>

        <Col xs={1} className="down">
          { object.status }
        </Col>

        <Col xs={1} className="down">
          <button onClick={this.handlerInactive}>
            <i className="fa fa-ban" aria-hidden="true" />
          </button>
        </Col>

        <Clearfix />
      </div>
      <br />
      </div>
    )
  }

}

