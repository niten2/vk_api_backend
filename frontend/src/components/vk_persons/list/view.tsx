import * as React from 'react'
import Link from "src/config/link"

class ViewUser extends React.Component<any, any> {

  state = {
    attributes: [
      "id",
      "uid",
      "isFriend",
      "first_name",
      "last_name",
      "deactivated",
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
                {object[attribute].toString()}
              </td>
            )
          })
        }

      </tr>
    )
  }

}

export default ViewUser
