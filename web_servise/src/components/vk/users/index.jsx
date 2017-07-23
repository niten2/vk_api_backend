import React, { Component } from 'react'
// import { observer } from 'mobx-react'
// import { UIStore } from 'stores'
// import { User, Tag } from "models"

// import { size, compact, sortBy } from "lodash"
// import Select from 'react-select'

// import { Tabs, Tab, Button, Row, Col } from 'reactstrap'
// import { Row, Col } from 'reactstrap'
// import { Row, Container, Col, Button } from 'reactstrap'
import { Row, Container, Col } from 'reactstrap'
// import { Link } from 'lib/nav_link'
// import Notification from 'lib/notification'
// import Spinner from 'components/shared/spinner'

// import UserView from './user_view'
// import SelectView from './select'
// import Sidebar from 'components/vk/sidebar'

// @observer
export default class Index extends Component {

  state = {
    loading: true,
  }

  renderObjects() {
    // let objects = []
    // let ids = UIStore.user_ids.slice()

    // ids.map(id => { objects.push(User.get(id)) })
    // objects = sortBy(objects, "followers_count").reverse()

        // { compact(objects).map((object, index) =>
        //     <UserView
        //       object={object}
        //       key={index}
        //     />
        // )}
    return (
      <div>
      </div>
    )
  }

  render() {
    // let count = UIStore.group_ids.slice().length
    // let count = 0

    return (
      <Container>
        <Row className="text-center">

          <Col xs={12}>
            <br />
            <h1> Пользователи </h1>
          </Col>

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

        </Row>
      </Container>
    )
  }

}
          // <SelectView count={count} />
        // { UIStore.loading ? Spinner() : this.renderObjects() }
