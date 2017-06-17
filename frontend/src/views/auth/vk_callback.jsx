import React, { Component, PropTypes } from "react"
import { UIStore } from 'stores'
import { observer } from "mobx-react"
import { handleSetState } from "lib/promise"
import auth from "lib/auth"

import { Clearfix, Col, Button } from "react-bootstrap"
import Notification from 'notification'
import Spinner from 'spinner'

@observer
export default class Login extends Component {

  static propTypes = {
    location: PropTypes.object
  }

  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  componentDidMount() {
    const { location } = this.props
    let token = location.query.token
    auth.login(token)
    this.context.router.replace('/')
  }

  render() {
    return null
  }

}

