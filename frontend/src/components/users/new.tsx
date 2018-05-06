import * as React from "react"
import Select from 'react-select'
import Link from "src/config/link"
import { Input } from 'reactstrap'
import { set, lensProp } from 'ramda'

import Notification from 'src/config/notification'
import Spinner from 'src/components/shared/spinner'
import Page500 from 'src/components/shared/page500'
import { withData } from 'src/components/users/new/queries'

interface P {
  territoriesQuery: {
    territories: any
    loading: boolean
    error: any
  }
  createUserQuery(options: any): any
}

class NewUser extends React.Component<P, any> {

  state = {
    user: {
      full_name: "",
      login: "",
      password: "",
      email: "",
      role: "manager",
      phone: "",
      territory: "",
    },
    roles: [
      {value: "manager"},
      {value: "admin"}
    ]
  }

  handleSetState = (e) => {
    const { name, value } = e.target
    let { user } = this.state

    user[name] = value
    this.setState({ user })
  }

  changeSelect = (value) => {
    let setClient = set(lensProp("role"), value.value)
    this.setState({ user: setClient(this.state.user) })
  }

  changeSelectTerritory = (value) => {
    let setClient = set(lensProp("territory"), value.id)

    this.setState({ user: setClient(this.state.user) })
  }

  handleOnKeyPress = (target: any) => {
    if (target.charCode === 13) {
      this.handleCreate()
    }
  }

  handleCreate = async (e?: any) => {
    if (e) { e.preventDefault() }
    const { user } = this.state

    const options = {
      variables: {
        input: {
          full_name: user.full_name,
          email: user.email,
          login: user.login,
          password: user.password,
          role: user.role,
          phone: user.phone,
          territory: user.territory,
        }
      },
    }

    try {
      await this.props.createUserQuery(options)

      this.setState({
        user: {
          full_name: "",
          login: "",
          password: "",
          email: "",
          role: "manager",
          phone: "",
          territory: "",
        }
      })

      Notification.success("create user")
    } catch (err) {
      Notification.error(err.message)
    }
  }

  render() {
    let { territories, loading, error } = this.props.territoriesQuery
    let { user, roles } = this.state

    if (loading) {
      return <Spinner />
    }

    if (error) {
      return <Page500 />
    }

    return (
      <div className="container-fluid">
        <div className="animated fadeIn">

          <div className="row">
            <div className="col-lg-12">

              <div className="card">

                <div className="card-header">
                  <i className="fa fa-align-justify" /> New User
                </div>

                <div className="card-block">
                  <form className="form-2orizontal">

                    <div className="form-group row">
                      <div className="col-md-12">
                        <div className="input-group">
                          <span className="input-group-addon">full_name</span>
                          <Input
                            name="full_name"
                            placeholder="full_name"
                            onChange={this.handleSetState}
                            onKeyPress={this.handleOnKeyPress}
                            value={user.full_name}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-group row">
                      <div className="col-md-12">
                        <div className="input-group">
                          <span className="input-group-addon">email</span>
                          <Input
                            name="email"
                            placeholder="email"
                            onChange={this.handleSetState}
                            onKeyPress={this.handleOnKeyPress}
                            value={user.email}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-group row">
                      <div className="col-md-12">
                        <div className="input-group">
                          <span className="input-group-addon">login</span>
                          <Input
                            name="login"
                            placeholder="login"
                            onChange={this.handleSetState}
                            onKeyPress={this.handleOnKeyPress}
                            value={user.login}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-group row">
                      <div className="col-md-12">
                        <div className="input-group">
                          <span className="input-group-addon">password</span>
                          <Input
                            name="password"
                            placeholder="password"
                            onChange={this.handleSetState}
                            onKeyPress={this.handleOnKeyPress}
                            value={user.password}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-group row">
                      <div className="col-md-12">
                        <div className="input-group">
                          <span className="input-group-addon">phone</span>
                          <Input
                            name="phone"
                            placeholder="phone"
                            onChange={this.handleSetState}
                            onKeyPress={this.handleOnKeyPress}
                            value={user.phone}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-group row">
                      <div className="col-md-12">
                        <div className="input-group">
                          <span className="input-group-addon">Status</span>
                            <Select
                              name="role"
                              labelKey="value"
                              valueKey="value"
                              className="form-control none-padding none-border"
                              options={roles}
                              onChange={this.changeSelect}
                              value={user.role}
                            />
                        </div>
                      </div>
                    </div>

                    <div className="form-group row">
                      <div className="col-md-12">
                        <div className="input-group">
                          <span className="input-group-addon">Territory</span>
                          <Select
                            name="role"
                            labelKey="rate"
                            valueKey="id"
                            className="form-control none-padding none-border"
                            options={territories}
                            onChange={this.changeSelectTerritory}
                            value={user.territory}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-actions">
                      <button
                        className="btn btn-primary"
                        onClick={this.handleCreate}
                      >
                        Save changes
                      </button>

                      &nbsp;

                      <Link to="/users">
                        <button
                          className="btn btn-default"
                        >
                          Cancel
                        </button>
                      </Link>
                    </div>
                  </form>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default withData(NewUser)
