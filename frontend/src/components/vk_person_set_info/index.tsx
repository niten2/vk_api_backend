import * as React from "react"
import { withData } from "./queries"

class Index extends React.Component<any, any> {

  componentWillReceiveProps(nextProps: any) {
    console.log("nextProps", nextProps)
  }

  handleTest = async () => {
    console.log("handleTest")
    await this.props.testQuery.refetch()
  }

  render () {
    console.log(this.props)

    return (
      <div className="app flex-row align-items-center">
        <div className="container">
          <div className="row justify-content-center">



            <div className="col-md-8">
              <div className="card-group mb-0">
                <div className="card p-4">
                  <div className="card-block">

                    test log

                    <button onClick={this.handleTest}>Button</button>

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
