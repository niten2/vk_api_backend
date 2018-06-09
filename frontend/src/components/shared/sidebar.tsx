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
                to={'/'}
                className="nav-link"
                activeClassName="active"
              >
                <i className="icon-speedometer" />
                Dashboard
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to={'/vk/friends/all'}
                className="nav-link"
                activeClassName="active"
              >
                <i className="icon-diamond" /> vk friends all
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to={'/vk/friends/today'}
                className="nav-link"
                activeClassName="active"
              >
                <i className="icon-diamond" /> vk friends today
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to={'/vk/friends/new'}
                className="nav-link"
                activeClassName="active"
              >
                <i className="icon-diamond" /> vk friends new
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to={'/vk/friends/set_users_info'}
                className="nav-link"
                activeClassName="active"
              >
                <i className="icon-diamond" />  vk friends set_users_info
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

            <li className="nav-item">
              <Link
                to={'/logs'}
                className="nav-link"
                activeClassName="active"
              >
                <i className="icon-diamond" /> logs
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
