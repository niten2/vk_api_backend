import React, { Component } from 'react'
import { compose, graphql } from 'react-apollo'
import Notification from 'lib/notification'
import authProvider from "lib/auth_provider"
import { set, lensProp } from 'ramda'
import { UserCreateQuery, JwtTokenCreateQuery } from 'components/auth/graphql/querues'
import { Link } from 'lib/nav_link'

class CreateUser extends Component {

  state = {
    user: {
      email: 'email@test.com',
      password: '1234',
      confirmPassword: "1234",
    },
    errorPassword: false,
  }

  handleSetState = (e) => {
    const { name, value } = e.target
    this.setState({
      user: set( lensProp(name), value, this.state.user),
      errorPassword: false,
    })
  }

  createUser = async () => {
    const { user } = this.state
    const { UserCreateQuery, JwtTokenCreateQuery } = this.props

    if (user.password !== user.confirmPassword) {
      this.setState({ errorPassword: true })
      return null
    }

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
    const { user, errorPassword } = this.state

    return (
      <div className="app flex-row">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card mx-4">
                <div className="card-block p-4">
                  <h1>Register</h1>
                  <p className="text-muted">Create your account</p>

                  <div className="input-group mb-3">
                    <span className="input-group-addon">@</span>

                    <input
                      type="text"
                      className="form-control"
                      name="email"
                      placeholder="Email"
                      value={user.email || ""}
                      onChange={ this.handleSetState }
                    />

                  </div>

                  <div className="input-group mb-3">
                    <span className="input-group-addon"><i className="icon-lock"></i></span>
                    <input
                      name="password"
                      type='password'
                      className="form-control"
                      placeholder='Password'
                      onChange={ this.handleSetState }
                      value={user.password || ""}
                    />
                  </div>

                  <div className="input-group mb-4">
                    <span className="input-group-addon"><i className="icon-lock"></i></span>
                    <input
                      name="confirmPassword"
                      type='password'
                      className="form-control"
                      placeholder="Repeat password"
                      onChange={ this.handleSetState }
                      value={user.confirmPassword || ""}
                    />
                  </div>

                  { errorPassword ? <div>
                      <div className="text-danger text-center">
                        Password and Password confirmation must match
                      </div>
                      <br />
                    </div> : null }
                  <button
                    onClick={ this.createUser }
                    type="button"
                    className="btn btn-block btn-success"
                  >Create Account</button>

                  <br />

                  <Link href="/login">
                    <button type="button" className="btn btn-block btn-primary">Login</button>
                  </Link>

                </div>
                <div className="card-footer p-4">
                  <div className="row">
                    <div className="col-6">
                      <button className="btn btn-block btn-facebook" type="button"><span>facebook</span></button>
                    </div>
                    <div className="col-6">
                      <button className="btn btn-block btn-twitter" type="button"><span>twitter</span></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default compose(
  graphql(UserCreateQuery, { name: "UserCreateQuery" }),
  graphql(JwtTokenCreateQuery, { name: "JwtTokenCreateQuery" }),
)(CreateUser)
