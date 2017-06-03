import React, { PropTypes, Component } from 'react'
import { observer } from 'mobx-react'
import { UIStore } from 'stores'
import { Group } from "models"

import Select from 'react-select'
import { compact, sortBy } from "lodash"

import { Tabs, Tab, Button, Clearfix, Grid, Row, Col } from 'react-bootstrap'
import Notification from 'notification'
import Spinner from 'spinner'
import { NavLink } from 'nav_link'

import GroupView from './group_view'
import SelectView from './select'

@observer
export default class Index extends Component {

  state = {
    loading: false,
    showinText: false,
  }

  getObjects() {
    let objects = []
    let ids = UIStore.group_ids.slice()

    ids.map(id => { objects.push(Group.get(id)) })
    objects = sortBy(objects, "members_count").reverse()

    return objects
  }


  handeShowInText = () => {
    let { showInText } = this.state
    this.setState({ showInText: !showInText })
  }

  renderObjects = () => {

    return (
      <div>
        { compact(this.getObjects()).map((object, index) =>
            <GroupView
              object={object}
              key={index}
            />
        )}
      </div>
    )
  }

  renderTextGroups() {
    return (
      <div>
        List Groups
        <br />
        <br />

        { compact(this.getObjects()).map((object, index) =>
            <div key={index}>
              { `http://vk.com/club${object.gid}` }
              <Clearfix />
            </div>
        )}


      </div>
    )
  }

  renderGroups() {
    return (
      <div>
        <Col xs={1}>
          ID
        </Col>
        <Col xs={2}>
          Screen Name
        </Col>
        <Col xs={5}>
          Название
        </Col>
        <Col xs={2}>
          Количество
        </Col>
        <Col xs={2}>
          Комментарий
        </Col>

        <Clearfix />
        <br />
        <br />

        { UIStore.loading ? Spinner() : this.renderObjects() }
      </div>
    )
  }

  render() {
    let { showInText } = this.state
    let count = UIStore.group_ids.slice().length

    return (
      <Grid>

        <Col xs={6}>
          <h1> Группы </h1>
        </Col>

        <Col xs={6}>
          <Button onClick={this.handeShowInText}>
            show in text
          </Button>
        </Col>

        <Clearfix />

        <SelectView count={count} />

        { showInText ? this.renderTextGroups() : this.renderGroups() }

        <Clearfix />
        <br />
        <br />

      </Grid>
    )
  }

}

