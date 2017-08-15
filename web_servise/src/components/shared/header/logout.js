import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Dropdown, DropdownMenu, DropdownItem } from 'reactstrap'
import { Link } from 'lib/nav_link'
import Avatar from "./avatar.jpg"
import { handleLogout } from 'actions/auth'

class Logout extends Component {

  state = {
    dropdownOpen: false
  }

  toggle = () => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen })
  }

  logout = () => {
    this.props.dispatch(handleLogout())
  }

  render() {
    return (
      <li className="nav-item">
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <button
            className="nav-link dropdown-toggle"
            data-toggle="dropdown"
            type="button"
            aria-haspopup="true"
            onClick={this.toggle}
            aria-expanded={this.state.dropdownOpen}
          >
            <img src={Avatar} className="img-avatar" alt="admin@bootstrapmaster.com"/>
            <span className="d-md-down-none">User name</span>
          </button>

          <DropdownMenu className="dropdown-menu-right">

            <DropdownItem header className="text-center"><strong>Settings</strong></DropdownItem>

            <Link href="/profile">
              <DropdownItem>
                <i className="fa fa-user" /> Profile
              </DropdownItem>
            </Link>

            <DropdownItem onClick={this.logout}><i className="fa fa-lock"></i> Logout</DropdownItem>

          </DropdownMenu>
        </Dropdown>
      </li>
    )
  }
}

export default connect()(Logout)
