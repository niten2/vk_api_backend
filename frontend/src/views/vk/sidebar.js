import React, { PropTypes, Component } from 'react'
import { NavLink } from 'nav_link'

export default class Sidebar extends Component {

  render() {
    let { active } = this.props

    return (
      <div className="text-center">

        <nav className="navbar navbar-default sidebar" role="navigation">
            <div className="container-fluid">

            <div className="collapse navbar-collapse" id="bs-sidebar-navbar-collapse-1">
              <ul className="nav navbar-nav">

                <li className={ active == "users" ? "active" : null }>
                  <NavLink to = "/vk/users">
                    Users
                    <span className="pull-right hidden-xs showopacity glyphicon glyphicon-home"></span>
                  </NavLink>
                </li>


                <li className={ active == "groups" ? "active" : null }>
                  <NavLink to = "/vk/groups">
                    Groups
                    <span className="pull-right hidden-xs showopacity glyphicon glyphicon-th-list"></span>
                  </NavLink>
                </li>

                <li className={ active == "tags" ? "active" : null }>
                  <NavLink to = "/vk/tags">
                    Tags
                    <span className="pull-right hidden-xs showopacity glyphicon glyphicon-th-list"></span>
                  </NavLink>
                </li>

              </ul>
            </div>

          </div>
        </nav>

      </div>
    )
  }

}

