import * as React from "react"
import * as ReactMarkdown from "react-markdown"
import description from "./description"

class Dashboard extends React.Component {

  render() {
    return (
      <div className="container-fluid">
        <div className="animated fadeIn">

          <div className="row">
            <div className="col-lg-12">
              <div className="card">

                <div className="card-header">
                  <i className="fa fa-align-justify" />
                  Description
                </div>

                <div className="card-block">
                  <ReactMarkdown source={description} />
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Dashboard
