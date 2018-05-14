import * as React from 'react'
import Link from "src/config/link"

class ViewUser extends React.Component<any, any> {

  state = {
    attributes: [
      "uid",
      "message",
    ]
  }

  render() {
    let { object } = this.props

    object.message = "object created"

    let { attributes } = this.state

    return (

      <div className="container-fluid">
        <div className="animated fadeIn">

          <div className="row">
            <div className="col-lg-12">
              <div className="card">

                <div className="card-header">
                  <i className="fa fa-align-justify" /> Vk Persons
                </div>

                <div className="card-block">
                  <table className="table text-center">
                    <thead>
                      <tr>
                        <th className="text-center">UID</th>
                        <th className="text-center">message</th>
                      </tr>
                    </thead>
                    <tbody>

                      <tr>
                        {
                          attributes.map((attribute, index) => {
                            return (
                              <td key={index}>
                                {object[attribute]}
                              </td>
                            )
                          })
                        }
                      </tr>

                    </tbody>
                  </table>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>




    )
  }

}

export default ViewUser
