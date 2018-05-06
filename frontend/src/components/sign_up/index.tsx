import * as React from "react"
import AuthProvider from "src/config/auth_provider"
import { ErrorMessage } from "./components"
import { withData } from "./queries"

interface P {
  createUser: (options: object) => Promise<any>
  history: any
}

interface S {
  email: string | null
  password: string | null
  error: string | null
  loading: boolean
}

class SignUp extends React.Component<P, S> {

  state = {
    email: "",
    password: "",
    error: null,
    loading: false,
  }

  handleSetState = (e) => {
    const { name, value } = e.target
    let variable = {}

    variable[name] = value

    this.setState(variable)
  }

  handleSignUp = async () => {
    const { email, password } = this.state

    const options = {
      variables: {
        input: {
          email: email,
          password: password,
        }
      }
    }

    try {
      this.setState({ loading: true })
      let response = await this.props.createUser(options)

      const token = response.data.createUser.token

      AuthProvider.saveToken(token)

      this.props.history.push("dashboard")
    } catch (err) {
      this.setState({ loading: false })
      this.setState({ error: err.message })
    }
  }

  handleOnKeyPress = (target: any) => {
    if (target.charCode === 13) {
      this.handleSignUp()
    }
  }

  render () {
    let { email, error, loading } = this.state

    return (
      <div className="app flex-row align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card-group mb-0">
                <div className="card p-4">
                  <div className="card-block">

                    <h1>Sign Up</h1>

                    <div className="input-group mb-3">
                      <span className="input-group-addon">
                        <i className="fa fa-user-o" />
                      </span>

                      <input
                        type="text"
                        className="form-control"
                        placeholder="email"
                        name="email"
                        onChange={this.handleSetState}
                        onKeyPress={this.handleOnKeyPress}
                        value={email}
                      />
                    </div>

                    <div className="input-group mb-4">
                      <span className="input-group-addon">
                        <i className="fa fa-lock" />
                      </span>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        onChange={this.handleSetState}
                        onKeyPress={this.handleOnKeyPress}
                        value={this.state.password}
                      />
                    </div>

                    <ErrorMessage error={error} />

                    <div className="row">
                      <div className="col-6">
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={this.handleSignUp}
                        >
                          {loading ? <i className="fa fa-refresh fa-spin margin-rigth-0-5rem" /> : null}

                          SignUp
                        </button>
                      </div>
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

export default withData(SignUp)
