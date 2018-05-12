import * as React from "react"
import Select from 'react-select'
import Link from "src/config/link"
import { Input } from 'reactstrap'
import { set, lensProp } from 'ramda'

import Notification from 'src/config/notification'
import Spinner from 'src/components/shared/spinner'
import Page500 from 'src/components/shared/page500'
import Page404 from 'src/components/shared/page404'
import ChangePasswordUser from 'src/components/users/show/change_password'
import { withData } from 'src/components/users/show/queries'

interface P {
  match: {
    params: {
      id: any
    }
  }
  history: {
    push(arg: string)
  }
  territoriesQuery: {
    territories: [object]
    loading: any
    error: any
  }
  userQuery: {
    user: object
    loading: any
    error: any
  }
  usersQuery: {}
  updateUserQuery(options: any): {}
  deleteUserQuery(options: any): {}
}

class ShowUser extends React.Component<P, any> {

  state = {
    user: {
      id: "",
      full_name: "",
      email: "",
      login: "",
      role: "",
      phone: "",
      territory: "",
      blocked: false,
    },
    roles: [
      {value: "manager"},
      {value: "admin"}
    ],
  }

  componentWillReceiveProps(props: any) {
    this.setState({ user: props.userQuery.user })
  }

  handleSetState = (e) => {
    const { name, value } = e.target
    this.setState({ user: set(lensProp(name), value, this.state.user) })
  }

  handleUpdate = async (e?: any) => {
    if (e) { e.preventDefault() }

    const { user } = this.state

    const options = {
      variables: {
        input: {
          id: user.id,
          full_name: user.full_name,
          email: user.email,
          login: user.login,
          role: user.role,
          phone: user.phone,
          territory: user.territory,
          blocked: user.blocked,
        }
      },
    }

    try {
      await this.props.updateUserQuery(options)
      Notification.success("update user")
    } catch (err) {
      Notification.error(err.message)
    }
  }

  handleDelete = async (e?: any) => {
    if (e) { e.preventDefault() }

    const { user } = this.state

    const options = {
      variables: {
        input: {
          id: user.id
        }
      },
    }

    try {
      await this.props.deleteUserQuery(options)
      Notification.success("user delete")

      this.props.history.push("/users")
    } catch (err) {
      Notification.error(err.message)
    }
  }

  changeSelectRole = (value) => {
    let setClient = set(lensProp("role"), value.value)

    this.setState({ user: setClient(this.state.user) })
  }

  changeSelectTerritory = (value) => {
    let setClient = set(lensProp("territory"), value.id)

    this.setState({ user: setClient(this.state.user) })
  }

  handleSetStateCheckbox = (e) => {
    this.setState({
      user: set(
        lensProp("blocked"),
        !this.state.user.blocked,
        this.state.user
      )
    })
  }

  handleOnKeyPress = (target: any) => {
    if (target.charCode === 13) {
      this.handleUpdate()
    }
  }

  render() {
    let userResponse = this.props.userQuery
    let territoriesResponse = this.props.territoriesQuery

    if (userResponse.loading || territoriesResponse.loading) {
      return <Spinner />
    }

    if (userResponse.error || territoriesResponse.error) {
      return <Page500 />
    }

    let { user, roles } = this.state
    let { territories } = this.props.territoriesQuery

    if (!user) {
      return <Page404 />
    }

    return (
      <div>
        <div className="container-fluid">
          <div className="animated fadeIn">

            <div className="row">
              <div className="col-lg-12">

                <div className="card">

                  <div className="card-header">
                    <i className="fa fa-align-justify" /> User
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
                            <span className="input-group-addon">Role</span>
                            <Select
                              name="role"
                              labelKey="value"
                              valueKey="value"
                              className="form-control none-padding none-border"
                              options={roles}
                              value={user.role}
                              onChange={this.changeSelectRole}
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
                              value={user.territory}
                              onChange={this.changeSelectTerritory}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="form-group row">
                        <div className="col-md-12">
                          <div className="input-group">
                            <span className="input-group-addon">Blocked</span>
                            <div className="form-control">
                              <Input
                                className="checkbox-offset"
                                type="checkbox"
                                onChange={this.handleSetStateCheckbox}
                                checked={user.blocked}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="form-actions">
                        <button
                          className="btn btn-primary"
                          onClick={this.handleUpdate}
                        >
                          Save changes
                        </button>

                        {" "}

                        <button
                          className="btn btn-primary"
                          onClick={this.handleDelete}
                        >
                          Delete
                        </button>

                        {" "}

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

        <ChangePasswordUser userId={this.props.match.params.id} />
      </div>
    )
  }

}

export default withData(ShowUser)
