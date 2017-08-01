import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'lib/nav_link'
import { compose, graphql } from 'react-apollo'
import Notification from 'lib/notification'
import { set, lensProp } from 'ramda'
import {
  statusesQuery,
  clientsQuery,
  clientQuery,
  updateClientQuery
} from 'components/crm/graphql/querues'
import Spinner from 'components/shared/spinner'
import Page500 from 'components/shared/page500'
import Select from 'react-select'

class Update extends Component {

  static propTypes = {
    clientQuery: PropTypes.object.isRequired,
    clientUpdate: PropTypes.func.isRequired,
    statusesQuery: PropTypes.object.isRequired,
  }

  componentWillReceiveProps(props) {
    const { client } = props.clientQuery
    this.setState({ client })

    let error = props.clientQuery.error
    if (error) { Notification.error(error.message) }
  }

  state = {
    client: {},
  }

  handleSetState = (e) => {
    const { name, value } = e.target
    let setClient = set(lensProp(name), value)
    this.setState({ client: setClient(this.state.client) })
  }

  changeSelect = (value) => {
    let setClient = set(lensProp("status_id"), value.id)
    this.setState({ client: setClient(this.state.client) })
  }

  handleUpdate = async (e) => {
    e.preventDefault()
    const { client } = this.state
    const { clientUpdate } = this.props

    try {
      await clientUpdate({
        variables: {
          id: this.props.match.params.id,
          number: client.number,
          name: client.name,
          phone: client.phone,
          note: client.note,
          date_birth: client.date_birth,
          status_id: client.status_id,
        },
        refetchQueries: [{
          query: clientsQuery,
        }],
      })
      Notification.success("update")
    } catch (error) {
      Notification.error(error)
    }
  }

  handleOnKeyPress = (target) => {
    if (target.charCode === 13) { this.handleUpdate() }
  }

  render() {
    let { client } = this.state
    let { loading, error } = this.props.clientQuery
    let { loadingStatus, errorStatus, statuses } = this.props.statusesQuery

    if (loading || loadingStatus) {
      return <Spinner />
    }

    if (error || errorStatus) {
      return <Page500 />
    }

    return (
      <div className="animated fadeIn">

        <div className="row">
          <div className="col-lg-12">

            <div className="card">

              <div className="card-header">
                <i className="fa fa-align-justify"></i> Simple Table
              </div>

              <div className="card-block">
                <form className="form-2orizontal">

                  <div className="form-group row">
                    <div className="col-md-12">
                      <div className="input-group">
                        <span className="input-group-addon">Name</span>
                        <input
                          name="name"
                          className="form-control"
                          onChange={ this.handleSetState }
                          onKeyPress={ this.handleOnKeyPress }
                          placeholder="name"
                          value={client.name || ""}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group row">
                    <div className="col-md-12">
                      <div className="input-group">
                        <span className="input-group-addon">Number</span>
                        <input
                          name="number"
                          onChange={ this.handleSetState }
                          className="form-control"
                          onKeyPress={ this.handleOnKeyPress }
                          placeholder="Number"
                          value={client.number || ""}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group row">
                    <div className="col-md-12">
                      <div className="input-group">
                        <span className="input-group-addon">Phone</span>
                        <input
                          name="phone"
                          className="form-control"
                          onChange={ this.handleSetState }
                          onKeyPress={ this.handleOnKeyPress }
                          placeholder="Phone"
                          value={client.phone || ""}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group row">
                    <div className="col-md-12">
                      <div className="input-group">
                        <span className="input-group-addon">Note</span>
                        <input
                          name="note"
                          className="form-control"
                          onChange={ this.handleSetState }
                          onKeyPress={ this.handleOnKeyPress }
                          placeholder="Note"
                          value={client.note || ""}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group row">
                    <div className="col-md-12">
                      <div className="input-group">
                        <span className="input-group-addon">Status</span>
                          <Select
                            deleteRemoves={false}
                            name="status_id"
                            value={client.status_id}
                            options={statuses}
                            onChange={this.changeSelect}
                            className="form-control"
                            labelKey="name"
                            valueKey="id"
                          />
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

                    &nbsp;

                    <Link href="/crm/clients">
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
    )
  }

}

export default compose(
  graphql(clientQuery, {
    name: "clientQuery",
    options: (props) => ({
      variables: { id: props.match.params.id }
    })
  }),
  graphql(updateClientQuery, {
    name: "updateClientQuery"
  }),
  graphql(statusesQuery, {
    name: "statusesQuery"
  }),
)(Update)
