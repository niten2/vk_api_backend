import React, { PropTypes, Component } from 'react'
import { observer } from 'mobx-react'
import { UIStore } from 'stores'
import { Tag } from "models"

import Select from 'react-select'
import { filter, sortBy } from "lodash"

import { Tabs, Tab, Button, Clearfix, Grid, Row, Col } from 'react-bootstrap'
import Notification from 'notification'
import Spinner from 'spinner'
import { NavLink } from 'nav_link'

import TagView from './tag_view'
// import SelectView from './select'
import Sidebar from 'views/vk/sidebar'

@observer
export default class Index extends Component {

  async componentWillMount() {
    await Tag.loadAll()
    this.setState({loading: false })
  }

  state = {
    loading: true,
  }

  render() {
    const tagUsers = filter(Tag.all(), { kind: "users"})
    const tagGroups = filter(Tag.all(), { kind: "groups"})

    return (
      <Grid>
        <Sidebar active="tags"/>

        <h1> Тэги </h1>

        <Col xs={6}>
          <NavLink to="/tags/new">
            <Button>
              New
            </Button>
          </NavLink>
        </Col>

        <Clearfix />

        <Col xs={6}>
          <h1> Users </h1>

          <Col xs={1}>
            ID
          </Col>
          <Col xs={5}>
            Название
          </Col>

          <Clearfix />
          <br />
          <br />

          {
            tagUsers.map((object, index) =>
              <TagView
                object={object}
                key={index}
              />
          )}
        </Col>


        <Col xs={6}>
          <h1> Groups </h1>

          <Col xs={1}>
            ID
          </Col>
          <Col xs={5}>
            Название
          </Col>

          <Clearfix />
          <br />
          <br />

          {
            tagGroups.map((object, index) =>
              <TagView
                object={object}
                key={index}
              />
          )}
        </Col>


      </Grid>
    )
  }

}
