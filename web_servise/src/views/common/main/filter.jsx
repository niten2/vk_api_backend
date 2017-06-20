import React, { PropTypes, Component } from 'react'
import { observer } from 'mobx-react'
import { UIStore } from 'stores'
import { Filter } from "models"

import Select from 'react-select'

import { Tabs, Tab, Button, Clearfix, Grid, Row, Col } from 'react-bootstrap'
import { NavLink } from 'nav_link'
import Notification from 'notification'

@observer
export default class Index extends Component {

  handleClick = () => {
    let { object } = this.state

    Filter.filterUser(object).then(response => {
      Notification.success("ready")
      console.log(response)
    })
  }

  state = {
    options: [
      { value: 'women', label: 'Женщина' },
      { value: 'men', label: 'Мужчина' },
    ],

    object: {
      sex: "women",
      less_age: "24",
      more_age: "45",
      ids: ""
    }

  }

  logChange = (val) => {
    let { object } = this.state
    object.sex = val.value
    this.setState({object})
  }

  handleInput = (e) => {
    const { name, value } = e.target
    let { object } = this.state
    object[name] = value
    this.setState({ object })
  }

  render() {
    let { options, object } = this.state
    let filters = Filter.all()

    return (
      <Col>
        <h1 className="text-center"> Users </h1>

        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
          <Tab eventKey={1} title="request">

            <br />

            <Col xs={3}>
              <Select
                name="form-field-name"
                value={object.sex}
                options={options}
                onChange={this.logChange}
              />

              <Clearfix />
              <br />

              <input
                name="less_age"
                className="form-control"
                value={object.less_age}
                onChange={this.handleInput}
              />

              <Clearfix />
              <br />

              <input
                name="more_age"
                className="form-control"
                value={object.more_age}
                onChange={this.handleInput}
              />

              <Clearfix />
              <br />

              <Button onClick={this.handleClick}>
                Search
              </Button>

            </Col>

            <Col xs={9}>
              Ids
              <textarea
                rows="20"
                cols="15"
                name="ids"
                className="form-control"
                value={object.ids}
                onChange={this.handleInput}
              />

            </Col>

          </Tab>
          <Tab eventKey={2} title="response">
            { filters.map((object, index) =>
              <UserView
                key={index}
                object={object}
                number={index}
              />
            )}
          </Tab>

          <Tab eventKey={3} title="response for text">
            <br />
            { filters.map((object, index) =>
              <UserViewText
                key={index}
                object={object}
              />
            )}
          </Tab>

        </Tabs>



      </Col>
    )
  }

}

class UserViewText extends Component {

  render() {
    let { object } = this.props
    return (
      <div>
        <Col xs={4}>
          { object.id }
        </Col>
        <Clearfix />
      </div>
    )
  }

}




class UserView extends Component {

  render() {
    let { object, number } = this.props
    // console.log(object.links)
    return (
      <div>
        <h5 className="text-center"> { number } </h5>

        <Col xs={4}>
          links:
        </Col>
        <Col xs={4}>
          <a href={ object.links } target="_blank">
            { object.links }
          </a>
        </Col>

        <Clearfix />
        <Col xs={4}>
          id:
        </Col>
        <Col xs={4}>
          { object.id }
        </Col>

        <Clearfix />
        <Col xs={4}>
          Name:
        </Col>
        <Col xs={4}>
          { object.full_name }
        </Col>

        <Clearfix />
        <Col xs={4}>
          city:
        </Col>
        <Col xs={4}>
          { object.city }
        </Col>

        <Clearfix />
        <Col xs={4}>
          age:
        </Col>
        <Col xs={4}>
          { object.age }
        </Col>

        <Clearfix />
        <br />
      </div>
    )
  }

}


