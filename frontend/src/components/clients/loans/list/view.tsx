import * as React from 'react'
import * as moment from "moment"

import AuthProvider from 'src/config/auth_provider'
import Link from "src/config/link"

interface P {
  clientId: string
  loan: any
}

interface S {
  attributes: string[]
}

const EditLoanLink = (props: { clientId: string, loanId: string}): any => (
  <td>
    <Link to={`/clients/${props.clientId}/loans/${props.loanId}`}>
      <button className="btn btn-primary">
        Edit
      </button>
    </Link>
  </td>
)

class ViewLoan extends React.Component<P, S> {
  state = {
    attributes: [
      "sum",
      "total",
      "date_end",
    ]
  }

  formatDate = (date: string) => {
    return moment(new Date(date)).format("MM/DD/YYYY")
  }

  render() {
    let { loan, clientId } = this.props
    let { attributes } = this.state

    return (
      <tr>
        {
          attributes.map((attribute, index) => {
            if (attribute === "date_end") {
              return (
                <td key={index}>
                  {this.formatDate(loan[attribute])}
                </td>
              )
            }

            return (
              <td key={index}>
                {loan[attribute]}
              </td>
            )
          })
        }

        {AuthProvider.isAdmin() ? <EditLoanLink loanId={loan.id} clientId={clientId} /> : null}
      </tr>
    )
  }
}

export default ViewLoan
