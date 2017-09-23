import React from 'react'
import { graphql } from 'react-apollo'
import { createJwtTokenQuery } from 'components/auth/graphql/querues'
import { Link } from 'lib/nav_link'
import { connect } from 'react-redux'
import { handleLogin } from 'actions/auth'
import Notification from 'actions/notification'

const ErrorMessage = (
  <div>
    <div className="text-danger text-center">
      Email or Password incorrect
    </div>
    <br />
  </div>
)

class Login extends React.Component {

  state = {
    email: 'email@email.com',
    password: '1234',
    error: false,
  }

  signinUser = async () => {
    const { email, password } = this.state
    const { dispatch, createJwtTokenQuery } = this.props

    try {
      let response = await createJwtTokenQuery({
        variables: {
          input: {
            email: email,
            password: password,
          }
        }
      })

      dispatch(handleLogin(response.data.createJwtToken.token))
    } catch(error) {
      this.setState({ error: true })
      dispatch(Notification.error(error.message))
    }
  }

  render () {
    let { error } = this.state

    return (
      <div className="app flex-row">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card-group mb-0">
                <div className="card p-4">
                  <div className="card-block">
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <div className="input-group mb-3">
                      <span className="input-group-addon"><i className="icon-user"></i></span>

                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        onChange={(e) => this.setState({email: e.target.value})}
                        value={ this.state.email }
                      />

                    </div>
                    <div className="input-group mb-4">
                      <span className="input-group-addon"><i className="icon-lock"></i></span>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        value={ this.state.password }
                        onChange={(e) => this.setState({password: e.target.value})}
                      />

                    </div>

                    { error ? ErrorMessage : null }

                    <div className="row">

                      <div className="col-6">
                        <button
                          onClick={ this.signinUser }
                          type="button"
                          className="btn btn-primary px-4"
                        >Login</button>
                      </div>

                      <div className="col-6 text-right">
                        <button type="button" className="btn btn-link px-0">Forgot password?</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card card-inverse card-primary py-5 d-md-down-none" style={{ width: 44 + '%' }}>
                  <div className="card-block text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      <Link href="/register">
                        <button type="button" className="btn btn-primary active mt-3">Register Now!</button>
                      </Link>
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

export default connect()(
  graphql(
    createJwtTokenQuery, { name: "createJwtTokenQuery" },
  )(Login)
)
