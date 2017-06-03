import React, { PropTypes, Component } from 'react'
import { observer } from 'mobx-react'
import { UIStore } from 'stores'
import { PromiseLoadAll } from "helpers/promise"
import { User } from "models"

import { Button, Clearfix, Grid, Row, Col } from 'react-bootstrap'
import { NavLink } from 'nav_link'
import Spinner from 'spinner'
import UserViews from "./user"

@observer
class Index extends Component {

  componentWillMount() {
    PromiseLoadAll(User)
  }

  render() {
    return UIStore.loading ? Spinner() : renderView()
  }

}

const renderView = () => (
  <Col xs={12}>

    <Col xs={10}>
      List All Users
      <br />
      <br />
      { UserViews() }
    </Col>

  </Col>
)

export default Index
