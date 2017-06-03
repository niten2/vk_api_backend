import React, { PropTypes, Component } from 'react'
import { UIStore } from 'stores'
import { Post } from "models"

import { Button, Clearfix, Col } from 'react-bootstrap'
import { NavLink } from 'nav_link'
import Notification from 'notification'
import { handeDelete } from "helpers/promise"

class PostView extends Component {

  render() {
    let { object } = this.props
    return render(object)
  }

}

const render = (object) => (
  <div>
    <Col xs={4}>
      Name:
    </Col>
    <Col xs={4}>
      { object.name }
    </Col>
    <Col xs={4}>

      <NavLink to = {`/posts/${object.id}`} >
        <Button>
          Show
        </Button>
      </NavLink>
      &nbsp;
      <NavLink to = {`/posts/${object.id}/edit`} >
        <Button>
          Edit
        </Button>
      </NavLink>
      &nbsp;
      <Button onClick={()=>handeDelete(object, "Post destroy")} >
        Delete
      </Button>

    </Col>
  </div>
)

const renderPostView = (object, index) => (
  <PostView
    key={index}
    object={object}
  />
)

const renderPostViews = () => (
  Post.all().map((object, index) => renderPostView(object, index) )
)

export default renderPostViews
