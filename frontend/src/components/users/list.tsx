import * as React from 'react'

import Spinner from 'src/components/shared/spinner'
import Page500 from 'src/components/shared/page500'
import UserView from 'src/components/users/list/view'
import { withData } from 'src/components/users/list/queries'

interface P {
  usersQuery: {
    users: [object]
    loading: any
    error: any
  }
}

class ListUser extends React.Component<P, {}> {

  render() {
    let { users, loading, error } = this.props.usersQuery

    if (loading ) {
      return <Spinner />
    }

    if (error) {
      return <Page500 />
    }

    return (
      <div className="container-fluid">
        <div className="animated fadeIn">

          <div className="row">
            <div className="col-lg-12">
              <div className="card">

                <div className="card-header">
                  <i className="fa fa-align-justify" /> Users
                </div>

                <div className="card-block">
                  <table className="table text-center">
                    <thead>
                      <tr>
                        <th className="text-center">Id</th>
                        <th className="text-center">Email</th>
                        <th className="text-center">Login</th>
                        <th className="text-center">Role</th>
                        <th className="text-center">Edit</th>
                      </tr>
                    </thead>
                    <tbody>

                      { users.map((object, index) =>
                        <UserView
                          key={index}
                          object={object}
                        />
                      )}

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

export default withData(ListUser)
