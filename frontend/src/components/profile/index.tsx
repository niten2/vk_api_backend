import * as React from 'react'
import { set, lensProp } from 'ramda'

import Spinner from 'src/components/shared/spinner'
import Page500 from 'src/components/shared/page500'
import Notification from 'src/config/notification'
import { withData } from 'src/components/profile/queries'

// interface P {
//   me: {
//     me: {
//       vk_token: string
//     }
//     loading: any
//     error: any
//   }

//   updateMe: any
// }

// interface S {
//   me: {
//     full_name: string
//     email: string
//     login: string
//     password: string
//     role: string
//     phone: string
//     territory: string
//   }
// }

class Profile extends React.Component<any, any> {
  public state = {
    me: {
      vk_token: "",
    },
  }

  componentWillReceiveProps(props: any) {
    this.setState({ me: props.me.me })
  }

  handleSetState = (e) => {
    const { name, value } = e.target
    this.setState({ me: set(lensProp(name), value, this.state.me) })
  }

  updateUser = async () => {
    const { me } = this.state

    const options = {
      variables: {
        input: {
          vk_token: me.vk_token,
        }
      }
    }

    try {
      await this.props.updateMe(options)

      Notification.success("update profile")
    } catch (err) {
      Notification.error(err.message)
    }
  }

  render() {
    let { loading, error } = this.props.me
    let { me } = this.state

    if (loading) {
      return <Spinner />
    }

    if (error) {
      Notification.error(error.message)
      return <Page500 />
    }

    return (
      <div className="container-fluid">
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
                      <label className="col-md-3 form-control-label">Full name</label>
                      <div className="col-md-9">
                        <input
                          type="text"
                          className="form-control"
                          name="vk_token"
                          placeholder="vk_token"
                          value={me.vk_token || ""}
                          onChange={this.handleSetState}
                        />
                      </div>
                    </div>

                  </form>
                </div>

                <div className="card-footer">
                  <button
                    onClick={this.updateUser}
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
      </div>
    )
  }
}

export default withData(Profile)
