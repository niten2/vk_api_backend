import React from 'react'
import { withRouter } from 'react-router'
import { withApollo, graphql, gql } from 'react-apollo'
import { Col, Input, Row, Button } from 'reactstrap'
import Notification from 'lib/notification'
import { Center } from "./style"

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
      console.log(response)
    } catch(error) {
      Notification.error(error)
    }

  }

  render () {
    console.log(this.props)

    // if (this.props.data.loading) {
    //   return (<div>Loading</div>)
    // }

    // // redirect if user is logged in
    // if (this.props.data.user) {
    //   console.warn('already logged in')
    //   // this.props.router.replace('/')
    // }

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

const signinUser = gql`
  mutation ($email: String!, $password: String!) {
    signinUser(email: {email: $email, password: $password}) {
      token
    }
  }
`

const userQuery = gql`
  query {
    user {
      id
    }
  }
`

// export default graphql(
//   // signinUser, {name: 'signinUser'})
//   // (graphql(userQuery, { options: { fetchPolicy: 'network-only' }})
//   // (withRouter(CreateLogin))
// )

// export default CreateLogin

export default graphql(
  JwtTokenCreateQuery, { name: "JwtTokenCreateQuery" },
)(CreateLogin)
