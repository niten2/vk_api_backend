import * as React from 'react'
import Link from "src/config/link"
import UserList from 'src/components/users/list'

const NewUserLink = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-block">
            <Link to={`/users/new`}>
              <button type="button" className="btn btn-primary">
                New User
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
)

class IndexUser extends React.Component<{}, {}> {
  render() {
    return (
      <div className="animated fadeIn">
        <NewUserLink />
        <UserList />
      </div>
    )
  }
}

export default IndexUser
