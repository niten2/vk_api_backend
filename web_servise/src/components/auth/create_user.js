import React, { Component } from 'react'
import { compose, graphql } from 'react-apollo'
import { Input, Row, Col, Button } from 'reactstrap'
import Notification from 'lib/notification'
import authProvider from "lib/auth_provider"
import { set, lensProp } from 'ramda'
import { UserCreateQuery, JwtTokenCreateQuery } from 'components/auth/graphql/querues'
import { Center } from "./style"

class CreateUser extends Component {

  state = {
    user: {
      email: 'email@test.com',
      password: '1234',
    }
  }

  handleSetState = (e) => {
    const { name, value } = e.target
    this.setState({ user: set(
      lensProp(name),
      value,
      this.state.user)
    })
  }

  createUser = async () => {
    const { user } = this.state
    const { UserCreateQuery, JwtTokenCreateQuery } = this.props

    try {
      await UserCreateQuery({
        variables: {
          email: user.email,
          password: user.password,
        }
      })

      let response = await JwtTokenCreateQuery({
        variables: {
          email: user.email,
          password: user.password,
        }
      })

      const token = response.data.JwtTokenCreate.token

      console.log("GET token = ", token)

      authProvider.saveToken(token)
      this.props.history.push('/')

    } catch(error) {
      Notification.error(error)
    }
  }

  render () {
    const { user } = this.state

    return (
      <Center>
        <Row>
          <Col xs={{ size: 'auto', offset: 5 }}>
            <Input
              name="email"
              placeholder="email"
              value={user.email || ""}
              onChange={ this.handleSetState }
            />
            <Input
              name="password"
              type='password'
              placeholder='Password'
              onChange={ this.handleSetState }
              value={user.password || ""}
            />

            <br />

            <Button onClick={ this.createUser }>Sign Up</Button>

          </Col>

        </Row>

      </Center>
    )
  }
}

export default compose(
  graphql(UserCreateQuery, { name: "UserCreateQuery" }),
  graphql(JwtTokenCreateQuery, { name: "JwtTokenCreateQuery" }),
)(CreateUser)

