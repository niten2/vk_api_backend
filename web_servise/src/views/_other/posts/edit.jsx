import React, { PropTypes, Component } from 'react'
import { observer } from 'mobx-react'
import { UIStore } from 'stores'
import { Post } from "models"
import { Button, Clearfix, Col } from 'react-bootstrap'
import { NavLink } from 'nav_link'
import Spinner from 'spinner'
import {
  PromiseLoad,
  handleUpdateModel,
  handleSetState
} from "helpers/promise"

@observer
export default class EditPost extends Component {

  async componentWillMount() {
    let id = this.props.params.id
    let post = await PromiseLoad(Post, id)
    post.id = id
    this.setState({ post })
  }

  state = {
    post: {
      id: "",
      name: "",
      body: "",
    },
  }

  renderView() {
    let { post } = this.state
    return (
    <div>
      <h4 className="text-center"> Edit Post </h4>

      <Col xs={6}>
        Name:
      </Col>

      <Col xs={6}>
        <input
          name="name"
          className="form-control"
          value={ post.name }
          onChange={(e) => handleSetState.bind(this)(e, post)}
        />
      </Col>

      <Col xs={6}>
        Body:
      </Col>

      <Col xs={6}>
        <textarea rows="3" cols="45"
          name="body"
          className="form-control"
          value={ post.body }
          onChange={(e) => handleSetState.bind(this)(e, post)}
        />
      </Col>

      <Clearfix />
      <br />
      <br />

      <div className="text-center">
        <Button onClick={() => handleUpdateModel({
          Model: Post,
          attributes: post,
          message: "post updated",
        })}>
          Save
        </Button>

        &nbsp;

        <NavLink to ="/" >
          <Button>
            Back
          </Button>
        </NavLink>
      </div>

    </div>
    )
  }

  render() {
    return UIStore.loading ? Spinner() : this.renderView()
  }

}

