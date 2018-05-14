import * as React from 'react'
import { Input } from 'reactstrap'
import Notification from 'src/config/notification'
import VkPersonsView from './vkPersons'
import VkErrorView from './vkErrors'
import { withData } from './queries'

class Index extends React.Component<any, any> {

  state = {
    ids: [],
    vkPersons: [],
    errors: [],
  }

  handleSetState = (e) => {
    const { name, value } = e.target
    // let { user } = this.state
    // user[name] = value
    this.setState({ ids: value })
  }

  // handleOnKeyPress = (target: any) => {
  //   if (target.charCode === 13) {
  //     this.handleCreate()
  //   }
  // }

  handleCreate = async (e?: any) => {
    if (e) { e.preventDefault() }
    const { ids } = this.state

    const options = {
      variables: {
        input: {
          ids,
        }
      },
    }

    try {
      const res = await this.props.createVkFriendsQuery(options)

      const vkPersons = res.data.createVkFriends.persons
      const errors = res.data.createVkFriends.errors

      this.setState({ ids: [], vkPersons, errors })


      Notification.success("create friends")
    } catch (err) {
      Notification.error(err.message)
    }
  }


  render() {
    let { ids, vkPersons, errors } = this.state

    return (
      <div className="container-fluid">
        <div className="animated fadeIn">

          <div className="row">
            <div className="col-lg-12">
              <div className="card">

                <div className="card-header">
                  <i className="fa fa-align-justify" /> TITLE
                </div>

                <div className="card-block">

                  <form className="form-2orizontal">

                    <div className="form-group row">
                      <div className="col-md-12">
                        <div className="input-group">
                          <span className="input-group-addon">User ids</span>
                          <Input
                            type="textarea"
                            style={{ height: 300 }}
                            name="ids"
                            placeholder="ids"
                            onChange={this.handleSetState}
                            value={ids}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-actions">
                      <button
                        className="btn btn-primary"
                        onClick={this.handleCreate}
                      >
                        Add friends
                      </button>

                    </div>
                  </form>

                  { vkPersons.map((object, index) =>
                    <VkPersonsView
                      key={index}
                      object={object}
                    />
                  )}

                  { errors.map((object, index) =>
                    <VkErrorView
                      key={index}
                      object={object}
                    />
                  )}

                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default withData(Index)
