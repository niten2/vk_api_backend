import React, { PropTypes, Component } from 'react'
import { observer } from 'mobx-react'
import { UIStore } from 'stores'
import { PromiseLoadAll } from "helpers/promise"
import { Comment } from "models"

import { Button, Clearfix, Grid, Row, Col } from 'react-bootstrap'
import { NavLink } from 'nav_link'
import Spinner from 'spinner'
import CommentViews from "./comment"
import Fobbiden from "shared/fobbiden"


@observer
class Index extends Component {

  componentWillMount() {
    PromiseLoadAll(Comment)
  }

  render() {
    if (UIStore.loading) {
      return Spinner()
    } else {
      if (UIStore.fobbiden) {
        return <Fobbiden />
      } else {
        return renderView()
      }
   }
  }

}

const renderView = () => (
  <Col xs={12}>

    <Col xs={10}>
      List All Comment
      <br />
      <br />
      { CommentViews() }
    </Col>

  </Col>
)

export default Index
