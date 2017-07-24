import React from 'react'
import { graphql } from 'react-apollo'
import { Col, Input, Row, Button } from 'reactstrap'
import Notification from 'lib/notification'
import { Center } from "./style"
import authProvider from "lib/auth_provider"

import { JwtTokenCreateQuery } from 'components/auth/graphql/querues'

class CreateLogin extends React.Component {

  state = {
    email: 'email@test.com',
    password: '1234',
  }

  signinUser = async () => {
    const { email, password } = this.state
    const { JwtTokenCreateQuery } = this.props

    try {
      let response = await JwtTokenCreateQuery({
        variables: {
          email: email,
          password: password,
        }
      })
      const token = response.data.JwtTokenCreate.token

      console.log("GET token = ", token)

      authProvider.saveToken(token)
      this.props.history.push('/dasboard')
    } catch(error) {
      Notification.error(error)
    }
  }

  render () {
    return (
      <Center>
        <Row>
          <Col xs={{ size: 'auto', offset: 5 }}>
            <Input
              value={ this.state.email }
              placeholder='Email'
              onChange={(e) => this.setState({email: e.target.value})}
            />
            <Input
              type='password'
              value={ this.state.password }
              placeholder='Password'
              onChange={(e) => this.setState({password: e.target.value})}
            />

            <br />

            <Button
              onClick={ this.signinUser }
            >Log in
            </Button>

          </Col>
        </Row>
      </Center>
    )
  }

}

export default graphql(
  JwtTokenCreateQuery, { name: "JwtTokenCreateQuery" },
)(CreateLogin)
