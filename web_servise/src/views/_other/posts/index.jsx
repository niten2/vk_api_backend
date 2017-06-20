import React, { PropTypes, Component } from 'react'
import { observer } from 'mobx-react'
import { UIStore } from 'stores'
import { PromiseLoadAll } from "helpers/promise"
import { Post } from "models"

import { Button, Clearfix, Grid, Row, Col } from 'react-bootstrap'
import { NavLink } from 'nav_link'
import Spinner from 'spinner'
import PostView from "./post"

@observer
class Posts extends Component {

  componentWillMount() {
    PromiseLoadAll(Post)

    // request
    //   .get('/api/movies')
    //   .set('X-API-Key', 'foobar')
    //   .set('Accept', 'application/json')
    //   .end(function(err, res){
    //     console.log(res.body)
    //     // Calling the end function will send the request
    //   });

  }

  render() {
    return UIStore.loading ? Spinner() : renderView()
  }

}

const renderView = () => (
  <Col xs={12}>

    <Col xs={10}>
      List All Post
      <br />
      <br />
      { PostView() }
    </Col>

    <Col xs={2}>
      <NavLink
        to = "/posts/new"
      >
        <Button>
          Create Post
        </Button>
      </NavLink>
    </Col>

  </Col>
)

export default Posts
