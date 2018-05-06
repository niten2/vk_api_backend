import * as React from 'react'
import Link from "src/config/link"

class ViewUser extends React.Component<any, any> {

  state = {
    attributes: [
      "id",
      "email",
      "login",
      "role",
    ]
  }

  render() {
    let { object } = this.props
    let { attributes } = this.state

    return (
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

        <td>
          <Link
            to={`/users/${object.id}`}
          >
            <button className="btn btn-primary">
              Edit
            </button>
          </Link>
        </td>
      </tr>
    )
  }

}

export default ViewUser
