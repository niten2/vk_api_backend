import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Notification from 'actions/notification'
import { set, lensProp } from 'ramda'
import { userQuery, updateUserQuery } from 'components/auth/graphql/querues'
import { compose, graphql } from 'react-apollo'
import Spinner from 'components/shared/spinner'
import Page401 from 'components/shared/page401'
import Page500 from 'components/shared/page500'

const ErrorMessage = (
  <div>
    <div className="text-danger text-center">
      Password and Password confirmation must match
    </div>
    <br />
  </div>
)

class Profile extends React.Component {

  static propTypes = {
    updateUserQuery: PropTypes.func.isRequired,
    userQuery: PropTypes.object.isRequired,
  }

  componentWillReceiveProps(props) {
    const { user } = props.userQuery
    this.setState({ user })

    let error = props.userQuery.error
    if (error) { props.dispatch(Notification.error(error.message)) }
  }

  state = {
    user: {},
    errorPassword: false,
  }

  handleSetState = (e) => {
    const { name, value } = e.target
    this.setState({
      user: set(lensProp(name), value, this.state.user),
      errorPassword: false,
    })
  }

  updateUser = async () => {
    const { user } = this.state
    const { dispatch, updateUserQuery } = this.props

    if (user.password !== user.confirmPassword) {
      this.setState({ errorPassword: true })
      return null
    }

    try {
      let response = await updateUserQuery({
        variables: {
          input: {
            name: user.name,
            email: user.email,
            password: user.password,
          }
        }
      })
      dispatch(Notification.success("update profile"))
    } catch(error) {
      dispatch(Notification.error(error))
    }
  }

  render () {
    const { user, errorPassword } = this.state
    const { loading, error } = this.props.userQuery

    if (loading ) {
      return <Spinner />
    }

    if (error && error.message.includes("401") ) {
      return <Page401 />
    }

    if (error ) {
      return <Page500 />
    }

    return (
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <strong>Profile</strong>
              </div>

              <div className="card-block">
                <form action="" method="post" encType="multipart/form-data" className="form-horizontal">

                  <div className="form-group row">
                    <label className="col-md-3 form-control-label">Name</label>
                    <div className="col-md-9">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Name"
                        value={user.name || ""}
                        onChange={ this.handleSetState }
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-md-3 form-control-label">Email</label>
                    <div className="col-md-9">
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        placeholder="Email"
                        value={user.email || ""}
                        onChange={ this.handleSetState }
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-md-3 form-control-label">Password</label>
                    <div className="col-md-9">
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Password"
                        value={user.password || ""}
                        onChange={ this.handleSetState }
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-md-3 form-control-label">Password Confirmation</label>
                    <div className="col-md-9">
                      <input
                        type="password"
                        className="form-control"
                        name="passwordConfirmation"
                        placeholder="Password Confirmation"
                        value={user.confirmPassword || ""}
                        onChange={ this.handleSetState }
                      />
                    </div>
                  </div>

                  { errorPassword ? ErrorMessage : null }

                </form>
              </div>

              <div className="card-footer">
                <button
                  onClick={ this.updateUser }
                  type="button"
                  className="btn btn-sm btn-primary"
                >
                  <i className="fa fa-dot-circle-o" /> Save Changes
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default connect()(
  compose(
    graphql(userQuery, { name: "userQuery" }),
    graphql(updateUserQuery, { name: "updateUserQuery" }),
  )(Profile)
)
