import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

const activeRoute = (routeName, props) => {
  return props.pathname.indexOf(routeName) > -1 ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown'
}

// const secondLevelActive = (routeName) => {
//   return "nav nav-second-level collapse in"
// }

const handleClick = (e) => {
  e.preventDefault();
  e.target.parentElement.classList.toggle('open')
}

const Crm = (props) => {
  return (
    <li className={activeRoute("/crm", props)}>
      <a className="nav-link nav-dropdown-toggle" onClick={handleClick.bind(this)}>
        <i className="icon-puzzle"></i> Crm
      </a>

      <ul className="nav-dropdown-items">

        <li className="nav-item">
          <NavLink
            to={'/crm/clients'}
            className="nav-link"
            activeClassName="active"
          >
            <i className="icon-puzzle"></i> Clients
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to={'/crm/statuses'}
            className="nav-link"
            activeClassName="active"
          >
            <i className="icon-puzzle"></i> Statuses
          </NavLink>
        </li>

      </ul>
    </li>
  )
}

const Vk = (props) => {
  return (
    <li className={activeRoute("/vk", props)}>
      <a className="nav-link nav-dropdown-toggle" onClick={handleClick.bind(this)}>
        <i className="icon-star"></i> Vk
      </a>

      <ul className="nav-dropdown-items">

        <li className="nav-item">
          <NavLink
            to={'/vk/users'}
            className="nav-link"
            activeClassName="active"
          >
            <i className="icon-star"></i> Users
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to={'/vk/groups'}
            className="nav-link"
            activeClassName="active"
          >
            <i className="icon-star"></i> Groups
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to={'/vk/tags'}
            className="nav-link"
            activeClassName="active"
          >
            <i className="icon-star"></i> Tags
          </NavLink>
        </li>

      </ul>
    </li>
  )
}

const Instagram = (props) => {
  return (
    <li className={activeRoute("/instagram", props)}>
      <a className="nav-link nav-dropdown-toggle" onClick={handleClick.bind(this)}>
        <i className="icon-diamond"></i> Instagram
      </a>

      <ul className="nav-dropdown-items">
        <li className="nav-item">
          <NavLink
            to={'/instagram'}
            className="nav-link"
            activeClassName="active"
          >
            <i className="icon-diamond"></i> Search
          </NavLink>
        </li>
      </ul>
    </li>
  )
}



class Sidebar extends Component {
  render() {
    const pathname = this.props.children.props.location.pathname
    return (
      <div className="sidebar">
        <nav className="sidebar-nav">
          <ul className="nav">

            <li className="nav-item">
              <NavLink
                to={'/dashboard'}
                className="nav-link"
                activeClassName="active"
              >
                <i className="icon-speedometer"></i> Dashboard <span className="badge badge-info">NEW</span>
              </NavLink>
            </li>

            <li className="nav-title">
              Services
            </li>

            <Crm pathname={pathname}/>
            <Vk pathname={pathname} />
            <Instagram pathname={pathname} />

          </ul>
        </nav>
      </div>
    )
  }
}

export default Sidebar
