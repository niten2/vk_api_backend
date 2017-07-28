import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Notification from 'lib/notification'
import { graphql } from 'react-apollo'
import { Link } from 'lib/nav_link'
import { personCreateQuery } from 'components/vk/graphql/querues'
import { Input } from 'reactstrap'

class New extends Component {

  static propTypes = {
    refetch: PropTypes.func.isRequired,
    personCreateQuery: PropTypes.func.isRequired,
  }

  state = {
    person: {},
  }

  handleSetState = (e) => {
    const { name, value } = e.target
    let { person } = this.state
    person[name] = value
    this.setState({ person })
  }

  handleCreate = async (e) => {
    e.preventDefault()
    const { personCreateQuery, refetch } = this.props
    const { person } = this.state

    try {
      await personCreateQuery({
        variables: {
          first_name: person.name,
        },
      })
      this.props.refetch()
      Notification.success("ok")
    } catch (e) {
      Notification.error(e)
    }
  }

  handleChangeTag = (val) => {
    let { group } = this.state
    group.tag_id = val.id
    this.setState({ group })
  }

  handleOnKeyPress = (target) => {
    if (target.charCode === 13) {
      this.handleCreate()
    }
  }

  render() {
    return (
      <div className="animated fadeIn">

        <div className="row">
          <div className="col-lg-12">

            <div className="card">

              <div className="card-header">
                <i className="fa fa-align-justify"></i> Create Person
              </div>

              <div className="card-block">
                <form className="form-2orizontal">

                  <div className="form-group row">
                    <div className="col-md-12">
                      <div className="input-group">
                        <span className="input-group-addon">Name</span>
                        <Input
                          name="name"
                          onChange={ this.handleSetState }
                          onKeyPress={ this.handleOnKeyPress }
                          placeholder="name"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group row">
                    <div className="col-md-12">
                      <div className="input-group">
                        <span className="input-group-addon">Number</span>
                        <Input
                          name="number"
                          onChange={ this.handleSetState }
                          onKeyPress={ this.handleOnKeyPress }
                          placeholder="Number"
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
                          onChange={ this.handleSetState }
                          onKeyPress={ this.handleOnKeyPress }
                          placeholder="Phone"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group row">
                    <div className="col-md-12">
                      <div className="input-group">
                        <span className="input-group-addon">Note</span>
                        <Input
                          name="note"
                          onChange={ this.handleSetState }
                          onKeyPress={ this.handleOnKeyPress }
                          placeholder="Note"
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

export default graphql(personCreateQuery, { name: "personCreateQuery" })(New)
