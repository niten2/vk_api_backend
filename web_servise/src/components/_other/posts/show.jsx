import React, { PropTypes, Component } from 'react'
import { observer } from 'mobx-react'
import { UIStore } from 'stores'
import { Post } from "models"
import { PromiseLoad } from "helpers/promise"

import { Button, Clearfix, Col } from 'react-bootstrap'
import { NavLink } from 'nav_link'
import Spinner from 'spinner'
import RenderNotFound from "views/shared/not_found"

@observer
export default class ShowPost extends Component {

  async componentWillMount() {
    let id = this.props.params.id
    let post =  await PromiseLoad(Post, id)
    if (post) {
      this.setState({ post, id })
    } else {
      this.setState({ notFound: true })
    }
  }

  state = {
    notFound: false,
    post: {
      name: "",
      body: "",
    },
  }

  render() {
    let { post, notFound } = this.state
    if (UIStore.loading) {
      return Spinner()
    } else {
      if (notFound) {
        return <RenderNotFound />
      } else {
        return RenderView(post)
      }
    }
  }

}

const RenderView = (object) => (
  <div>
    <h4 className="text-center"> Show Post </h4>

    <Col xs={6}>
      Name:
    </Col>

    <Col xs={6}>
      { object.name }
    </Col>

    <br />
    <br />

    <Col xs={6}>
      Body:
    </Col>

    <Col xs={6}>
      { object.body }
    </Col>

    <Clearfix />
    <br />
    <br />

    <div className="text-center">
      <NavLink to ="/" >
        <Button>
          Back
        </Button>
      </NavLink>
    </div>

  </div>
)
