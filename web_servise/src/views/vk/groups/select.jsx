import React, { PropTypes, Component } from 'react'
import { observer } from 'mobx-react'
import { autorun } from 'mobx'
import { UIStore } from 'stores'
import { Group, Tag } from "models"

import Select from 'react-select'
import { filter, sortBy, size } from "lodash"

import { Tabs, Tab, Button, Clearfix, Grid, Row, Col } from 'react-bootstrap'
import { NavLink } from 'nav_link'
import Notification from 'notification'
import Spinner from 'spinner'

@observer
export default class SelectView extends Component {

  componentWillMount() {
    Tag.loadAll({kind: "groups"}).then(response => {
      this.setState({loading: false })
    })
  }

  state = {
    loading: true,
    tag: {
      name: "",
      id: "",
    },
  }

  handleSelect = (value) => {
    UIStore.loading = true

    Group.loadAll({tag_id: value.id}).then(response => {
      let ids = []

      response.body.map(object => {
        ids.push(object.id)
      })

      autorun(() => {
        UIStore.group_ids = ids
        UIStore.loading = false
      })
    })

    this.setState({ tag: value })
  }

  render() {
    const tagGroups = filter(Tag.all(), { kind: "groups"})
    let { select, options, tag } = this.state
    let { count } = this.props

    return (
      <div>
        <Col xs={6}>
          <Select
            name="form-field-name"
            value={ tag }
            options={ tagGroups }
            onChange={this.handleSelect}
            valueKey="id"
            labelKey="name"
          />
        </Col>

        <Col xs={3}>
          <NavLink to="/groups/new">
            <Button>
              New
            </Button>
          </NavLink>
        </Col>

        <Col xs={3}>
          { count }
        </Col>

        <Clearfix />
        <br />

      </div>
    )
  }


}

