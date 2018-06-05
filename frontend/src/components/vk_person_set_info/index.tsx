import { path, append } from "ramda"
import * as React from "react"
import { withData } from "./queries"

class Index extends React.Component<any, any> {

  state = {
    subscribe: ["1111", "3333"]
  }

  componentWillReceiveProps(nextProps: any) {
    let { subscribe } = this.state

    let message = path(["subscribeToSetInfoVkPersons", "subscribeToSetInfoVkPersons", "message"], nextProps)

    subscribe = append(message, subscribe)

    this.setState({ subscribe })
  }

  handleTest = async () => {
    let res = await this.props.setInfoVkPersons()
      console.log(res)

  }

  render () {
    let { subscribe } = this.state

    return (
      <div className="app flex-row align-items-center">
        <div className="container">
          <div className="row justify-content-center">



            <div className="col-md-8">
              <div className="card-group mb-0">
                <div className="card p-4">
                  <div className="card-block">

                    <button onClick={this.handleTest}>set_users_info</button>

                    <ul>
                      { subscribe.map((object, index) =>
                        <li key={index}>
                          {object}
                        </li>
                      )}
                    </ul>

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

export default withData(Index)
