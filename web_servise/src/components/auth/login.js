import React from 'react'
import { graphql } from 'react-apollo'
import Notification from 'lib/notification'
import { Link } from 'lib/nav_link'
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

export default graphql(
  JwtTokenCreateQuery, { name: "JwtTokenCreateQuery" },
)(CreateLogin)

