import * as React from 'react'
import Link from "src/config/link"
import AuthProvider from "src/config/auth_provider"

const LinkUser = () => {
  if (AuthProvider.isAdmin()) {
    return (
      <li className="nav-item">
        <Link
          to={'/users'}
          className="nav-link"
          activeClassName="active"
        >
          <i className="icon-diamond" /> Users
        </Link>
      </li>
    )
  } else {
    return <div />
  }
}

class Sidebar extends React.Component<any, any> {
  render() {
    return (
      <div className="sidebar">
        <nav className="sidebar-nav">
          <ul className="nav">

            <li className="nav-item">
              <Link
                to={'/dashboard'}
                className="nav-link"
                activeClassName="active"
              >
                <i className="icon-speedometer" />
                Dashboard
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to={'/vk_persons'}
                className="nav-link"
                activeClassName="active"
              >
                <i className="icon-diamond" /> vk persons
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to={'/vk_add_new_friends'}
                className="nav-link"
                activeClassName="active"
              >
                <i className="icon-diamond" /> vk_add_new_friends
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to={'/profile'}
                className="nav-link"
                activeClassName="active"
              >
                <i className="icon-diamond" /> profile
              </Link>
            </li>


            <LinkUser />
          </ul>
        </nav>
      </div>
    )
  }
}

export default Sidebar
