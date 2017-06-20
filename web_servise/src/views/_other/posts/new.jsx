import React, { PropTypes, Component } from 'react'
import { observer } from 'mobx-react'
import { UIStore } from 'stores'
import { Post } from "models"
import { handleCreateModel, handleSetState } from "helpers/promise"

import { Button, Clearfix, Grid, Row, Col } from 'react-bootstrap'
import { NavLink } from 'nav_link'
import Notification from 'notification'

@observer
export default class Main extends Component {

  state = {
    post: {
      name: "",
      body: "",
    }
  }

  render() {
    let { post } = this.state
    return (
      <div>
        <Col xs={12} className="text-center">
          Create new Post
          <Clearfix />
          <br />

          <Col xs={6}>
            Name
          </Col>
          <Col xs={6}>
            <input
              name="name"
              className="form-control"
              onChange={(e) => handleSetState.bind(this)(e, post)}
            />
          </Col>

          <Clearfix />
          <br />

          <Col xs={6}>
            Body
          </Col>
          <Col xs={6}>
            <textarea rows="3" cols="45"
              name="body"
              className="form-control"
              onChange={(e) => handleSetState.bind(this)(e, post)}
            />
          </Col>


        </Col>

        <Clearfix />
        <br />

        <div className="text-center">
          <Button onClick={() => handleCreateModel(Post, "posts", post, "post save")}>
            Save
          </Button>
          &nbsp;
          <NavLink to = "/" >
            <Button>
              Back
            </Button>
          </NavLink>
        </div>

      </div>
    )
  }

}
