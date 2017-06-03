import React, { Component, PropTypes } from "react"
import { UIStore } from 'stores'
import { observer } from "mobx-react"
import { handleSetState } from "helpers/promise"
import auth from "lib/auth"

import { Clearfix, Col, Button } from "react-bootstrap"
import Notification from 'notification'
import Spinner from 'spinner'

// import ModalFrozeOverlay from "froze_overlay"

@observer
export default class Login extends Component {

  static propTypes = {
    location: PropTypes.object
  }

  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  state = {
    // user: {
    //   email: "test@test.com",
    //   password: "12345678",
    // },
    errors: null,
  }

  // handleGoogle = () => {
  //   // console.log("handleGoogle")
  //   // var Navigatable = require('react-router-component').NavigatableMixin
  //   // this.navigate('http://localhost:4000/auth/google')
  // }

  // handleSubmit = () => {
  //   let { user } = this.state
  //   const { routeParams } = this.props

  //   UIStore.setLoading()
  //   auth.login(user).then((response) => {
  //     if (response.ok) {
  //       const { location } = this.props
  //       if (location.state && location.state.nextPathname) {
  //         this.context.router.replace(location.state.nextPathname)
  //       } else {
  //         this.context.router.replace('/')
  //       }
  //       Notification.success(response.body.message)
  //       UIStore.setLogin()
  //     } else {
  //       Notification.error(response.body.error)
  //     }
  //     UIStore.setLoaded()
  //   })
  // }

  renderView() {
    let { user } = this.state

    return (
      <div>

        <h3 className="text-center"> Login </h3>


        <div className="text-center">
          <a href="http://localhost:4000/auth/vk">
            Login with VK
          </a>
        </div>

      </div>
    )
  }

  render() {
    return UIStore.loading ? Spinner() : this.renderView()
  }

}

        // <Col xs={12}>
        //   <Col xs={4}>
        //     Name:
        //   </Col>

        //   <Col xs={4}>
        //     <input
        //       name="email"
        //       className="form-control"
        //       value={ user.email }
        //       onChange={(e) => handleSetState.bind(this)(e, user)}
        //     />
        //   </Col>
        // </Col>

        // <br />
        // <br />

        // <Col xs={12}>
        //   <Col xs={4}>
        //     Password:
        //   </Col>

        //   <Col xs={4}>
        //     <input
        //       name="password"
        //       className="form-control"
        //       value={ user.password }
        //       onChange={(e) => handleSetState.bind(this)(e, user)}
        //     />
        //   </Col>
        // </Col>

        // <br />
        // <br />

        // <div className="text-center">
        //   <Button onClick={this.handleSubmit}>
        //     Sign In
        //   </Button>
        // </div>

        // <br />

        // <div className="text-center">
        //   <a href="http://localhost:4000/auth/google">
        //     Login with Google
        //   </a>
        // </div>
