import React, { Component } from 'react'
// import { withRouter } from 'react-router'
import { graphql } from 'react-apollo'
import { Input, Row, Container, Col, Button } from 'reactstrap'
import { UserCreateQuery } from 'components/auth/graphql/querues'
import Notification from 'lib/notification'
import { set, lensProp } from 'ramda'

class CreateUser extends Component {

  // static propTypes = {
  //   router: React.PropTypes.object.isRequired,
  //   createUser: React.PropTypes.func.isRequired,
  //   signinUser: React.PropTypes.func.isRequired,
  //   data: React.PropTypes.object.isRequired,
  // }

  state = {
    user: {
      // email: this.props.location.query.email || '',
      email: 'email@test.com',
      password: '1234',
      // name: '',
      // emailSubscription: false,
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
    const { UserCreateQuery } = this.props
    // const { createUser } = this.props

    console.log(user)
    try {
      await UserCreateQuery({
        variables: {
          email: user.email,
          password: user.password,
        }
      })
    } catch(error) {
      Notification.error(error)
    }

      // .then((response) => {
      //   this.props.signinUser({variables: {email, password}})
      //     .then((response) => {
      //       window.localStorage.setItem('graphcoolToken', response.data.signinUser.token)
      //       this.props.router.replace('/')
      //     }).catch((e) => {
      //       console.error(e)
      //       this.props.router.replace('/')
      //     })
      // }).catch((e) => {
      //   console.error(e)
      //   this.props.router.replace('/')
      // })
  }


  render () {
    const { user } = this.state
    // if (this.props.data.loading) {
    //   return (<div>Loading</div>)
    // }

    // redirect if user is logged in
    // if (this.props.data.user) {
    //   console.warn('already logged in')
    //   this.props.router.replace('/')
    // }

    return (

      <Container>
        <br />
        <br />

        <Row>
          <Col xs={{ size: 'auto', offset: 4 }}>
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
          </Col>
        </Row>

        <br />

        <Row>
          <Col xs={{ size: 'auto', offset: 4 }}>
            <Button onClick={ this.createUser }>Log in</Button>
          </Col>
        </Row>

      </Container>
    )
  }
}

// <input
//   className='w-100 pa3 mv2'
//   value={this.state.name}
//   placeholder='Name'
//   onChange={(e) => this.setState({name: e.target.value})}
// />
// export default graphql(createUser, {name: 'createUser'})(
  // graphql(userQuery, { options: { fetchPolicy: 'network-only' }})(
  //   graphql(signinUser, {name: 'signinUser'})(
  //     withRouter(CreateUser))
  //   )
// )
          // {
          //   this.state.name && this.state.email && this.state.password &&
          //   <button className='pa3 bg-black-10 bn dim ttu pointer' onClick={this.createUser}>Log in</button>
          // }

// export default graphql(createUserQuery, {name: 'createUserQuery'})(CreateUser)
// export default graphql(CreateUser)

export default graphql(UserCreateQuery, {
  name: "UserCreateQuery"
})(CreateUser)
