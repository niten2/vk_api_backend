import * as React from "react"
import Select from 'react-select'
import { Input } from 'reactstrap'
import { set, lensProp } from 'ramda'

import AuthProvider from 'src/config/auth_provider'
import Notification from 'src/config/notification'
import Spinner from 'src/components/shared/spinner'
import Page500 from 'src/components/shared/page500'
import Link from "src/config/link"
import { withData } from 'src/components/clients/show/queries'

class ShowClient extends React.Component<any, any> {

  state = {
    client: {
      id: "",
      full_name: "",
      email: "",
      passport: "",
      phone: "",
      total_sum_loans: null,
      mark_as_deleted: false,
      territory: {
        id: "",
        name: "",
        rate: "",
      },
    },
    roles: [
      {value: "manager"},
      {value: "admin"}
    ]
  }

  componentWillReceiveProps(props: any) {
    this.setState({ client: props.clientQuery.client })
  }

  handleUpdate = async (e?: any) => {
    if (e) { e.preventDefault() }

    const { client } = this.state

    let options: any = {
      variables: {
        input: {
          id: client.id,
          full_name: client.full_name,
          email: client.email,
          passport: client.passport,
          phone: client.phone,
          mark_as_deleted: client.mark_as_deleted,
        }
      },
    }

    if (AuthProvider.isAdmin()) {
      options.variables.input.territory = client.territory.id
    }

    try {
      await this.props.updateClientQuery(options)

      Notification.success("update client")
    } catch (err) {
      Notification.error(err.message)
    }
  }

  handleDelete = async (e?: any) => {
    if (e) { e.preventDefault() }

    const { client } = this.state

    const options = {
      variables: {
        input: {
          id: client.id
        }
      },
    }

    try {
      await this.props.deleteClientQuery(options)
      Notification.success("delete client")

      this.props.history.push("/clients")
    } catch (err) {
      Notification.error(err.message)
    }
  }

  handleSetState = (e) => {
    const { name, value } = e.target
    this.setState({ client: set(lensProp(name), value, this.state.client) })
  }

  handleSetStateCheckbox = (e) => {
    this.setState({
      client: set(
        lensProp("mark_as_deleted"),
        !this.state.client.mark_as_deleted,
        this.state.client
      )
    })
  }

  changeSelectTerritory = (value) => {
    this.setState({ client: set(lensProp("territory"), value, this.state.client) })
  }

  handleOnKeyPress = (target: any) => {
    if (target.charCode === 13) {
      this.handleUpdate()
    }
  }

  render() {
    let territoriesResponse = this.props.territoriesQuery
    let clientResponse = this.props.clientQuery
    let { client } = this.state

    if (territoriesResponse.loading || clientResponse.loading) {
      return <Spinner />
    }

    if (territoriesResponse.error || clientResponse.error || !client) {
      return <Page500 message={`${territoriesResponse.error}, ${clientResponse.error}`}/>
    }

    let territories = territoriesResponse.territories

    return (
      <div className="container-fluid">
        <div className="animated fadeIn">

          <div className="row">
            <div className="col-lg-12">

              <div className="card">

                <div className="card-header">
                  <i className="fa fa-align-justify" /> Client
                </div>

                <div className="card-block">
                  <form className="form-2orizontal">

                    <div className="form-group row">
                      <div className="col-md-12">
                        <div className="input-group">
                          <span className="input-group-addon">Full name</span>
                          <Input
                            name="full_name"
                            placeholder="full name"
                            onChange={this.handleSetState}
                            onKeyPress={this.handleOnKeyPress}
                            value={client.full_name}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-group row">
                      <div className="col-md-12">
                        <div className="input-group">
                          <span className="input-group-addon">Email</span>
                          <Input
                            name="email"
                            placeholder="email"
                            onChange={this.handleSetState}
                            onKeyPress={this.handleOnKeyPress}
                            value={client.email}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-group row">
                      <div className="col-md-12">
                        <div className="input-group">
                          <span className="input-group-addon">Passport</span>
                          <Input
                            name="passport"
                            placeholder="passport"
                            onChange={this.handleSetState}
                            onKeyPress={this.handleOnKeyPress}
                            value={client.passport}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-group row">
                      <div className="col-md-12">
                        <div className="input-group">
                          <span className="input-group-addon">Phone</span>
                          <Input
                            name="phone"
                            placeholder="phone"
                            onChange={this.handleSetState}
                            onKeyPress={this.handleOnKeyPress}
                            value={client.phone}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-group row">
                      <div className="col-md-12">
                        <div className="input-group">
                          <span className="input-group-addon">Mark as deleted</span>
                          <div className="form-control">
                            <Input
                              className="checkbox-offset"
                              name="mark_as_deleted"
                              placeholder="mark_as_deleted"
                              type="checkbox"
                              onChange={this.handleSetStateCheckbox}
                              checked={client.mark_as_deleted}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-group row">
                      <div className="col-md-12">
                        <div className="input-group">
                          <span className="input-group-addon">Total sum loans</span>
                          <div className="form-control">
                            {client.total_sum_loans}
                          </div>
                        </div>
                      </div>
                    </div>

                    {
                      AuthProvider.isAdmin() ?

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
                                value={client.territory}
                                onChange={this.changeSelectTerritory}
                              />
                            </div>
                          </div>
                        </div>

                      :
                      <div>
                        <div className="form-group row">
                          <div className="col-md-12">
                            <div className="input-group">
                              <span className="input-group-addon">Territory name</span>
                              <div className="form-control">
                                {client.territory.name}
                              </div>
                            </div>
                          </div>
                        </div>


                        <div className="form-group row">
                          <div className="col-md-12">
                            <div className="input-group">
                              <span className="input-group-addon">Territory rate</span>
                              <div className="form-control">
                                {client.territory.rate}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    }

                    <div className="form-actions">
                      <button
                        className="btn btn-primary"
                        onClick={this.handleUpdate}
                      >
                        Save changes
                      </button>

                      {" "}

                      {
                        AuthProvider.isAdmin() ?
                          <button
                            className="btn btn-primary"
                            onClick={this.handleDelete}
                          >
                            Delete
                          </button>
                        : null
                      }

                      {" "}

                      <Link to={`/clients/${client.id}/loans`}>
                        <button
                          className="btn btn-primary"
                        >
                          loans
                        </button>
                      </Link>

                      {" "}

                      <Link to="/clients">
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

export default withData(ShowClient)
