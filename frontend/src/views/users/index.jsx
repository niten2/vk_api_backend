import React, { PropTypes, Component } from 'react'
import { observer } from 'mobx-react'
import { UIStore } from 'stores'
import { User, Tag } from "models"

import { size, compact, sortBy } from "lodash"
import Select from 'react-select'

import { Tabs, Tab, Button, Clearfix, Grid, Row, Col } from 'react-bootstrap'
import { NavLink } from 'nav_link'
import Notification from 'notification'
import Spinner from 'spinner'

import UserView from './user_view'
import SelectView from './select'

@observer
export default class Index extends Component {

  state = {
    loading: true,
  }

  renderObjects() {
    let objects = []
    let ids = UIStore.user_ids.slice()

    ids.map(id => { objects.push(User.get(id)) })
    objects = sortBy(objects, "followers_count").reverse()

    return (
      <div>
        { compact(objects).map((object, index) =>
            <UserView
              object={object}
              key={index}
            />
        )}
      </div>
    )
  }

  render() {
    let count = UIStore.group_ids.slice().length

    return (
      <Grid>
        <Col className="text-center">
          <h1> Пользователи </h1>

          <SelectView count={count} />

          <Clearfix />
          <br />

          <Col xs={1}>
            ID
          </Col>
          <Col xs={2}>
            Аватар
          </Col>
          <Col xs={3}>
            Имя
          </Col>
          <Col xs={1}>
            Друзья
          </Col>
          <Col xs={1}>
            Пол
          </Col>
          <Col xs={1}>
            Город
          </Col>
          <Col xs={1}>
            Возраст
          </Col>
          <Col xs={1}>
            Статус
          </Col>

          <Clearfix />
          <br />
          <br />

        { UIStore.loading ? Spinner() : this.renderObjects() }

      </Col>
    </Grid>
    )
  }

}
