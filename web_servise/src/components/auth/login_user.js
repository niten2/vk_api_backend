import React from 'react'
import { withRouter } from 'react-router'
import { graphql, gql } from 'react-apollo'
import { Col, Input, Row, Button } from 'reactstrap'
import { Center } from "./style"

class CreateLogin extends React.Component {

  // static propTypes = {
  //   router: React.PropTypes.object.isRequired,
  //   signinUser: React.PropTypes.func.isRequired,
  //   data: React.PropTypes.object.isRequired,
  // }

  state = {
    email: '',
    password: '',
  }

  render () {
    if (this.props.data.loading) {
      return (<div>Loading</div>)
    }

    // redirect if user is logged in
    if (this.props.data.user) {
      console.warn('already logged in')
      // this.props.router.replace('/')
    }

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

  signinUser = () => {
    const {email, password} = this.state

    this.props.signinUser({variables: {email, password}})
      .then((response) => {
        window.localStorage.setItem('graphcoolToken', response.data.signinUser.token)
        // this.props.router.replace('/')
      }).catch((e) => {
        console.error(e)
        // this.props.router.replace('/')
      })
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

export default graphql(signinUser, {name: 'signinUser'})(
  graphql(userQuery, { options: { fetchPolicy: 'network-only' }})(withRouter(CreateLogin))
)
