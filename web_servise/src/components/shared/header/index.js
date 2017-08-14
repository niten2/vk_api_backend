import React, { Component } from 'react'
import { Link } from "lib/nav_link"
import { connect } from 'react-redux'
import Login from "./login"
import Logout from "./logout"

class Header extends Component {

  state = {
    dropdownOpen: false
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  }

  sidebarToggle = (e) => {
    e.preventDefault()
    document.body.classList.toggle('sidebar-hidden')
  }

  mobileSidebarToggle = (e) => {
    e.preventDefault()
    document.body.classList.toggle('sidebar-mobile-show')
  }

  asideToggle = (e) => {
    e.preventDefault()
    document.body.classList.toggle('aside-menu-hidden')
  }

  render() {
    const { login } = this.props

    return (
      <header className="app-header navbar">
        <button
          className="navbar-toggler mobile-sidebar-toggler d-lg-none"
          type="button"
          onClick={this.mobileSidebarToggle}
        >
          &#9776;
        </button>

        <a className="navbar-brand">&nbsp;</a>

        <ul className="nav navbar-nav d-md-down-none">

          <li className="nav-item">
            <button className="nav-link navbar-toggler sidebar-toggler" type="button" onClick={this.sidebarToggle}>
              &#9776;
            </button>
          </li>

          <li className="nav-item px-3">
            <Link
              href="/dasboard"
              className="nav-link"
            >Dashboard</Link>
          </li>
          <li className="nav-item px-3">
            <a className="nav-link">Users</a>
          </li>
          <li className="nav-item px-3">
            <a className="nav-link">Settings</a>
          </li>
        </ul>

        <ul className="nav navbar-nav ml-auto">

          <li className="nav-item d-md-down-none">
            <a className="nav-link">
              <i className="icon-bell" />
            </a>
          </li>

          <li className="nav-item d-md-down-none">
            <a className="nav-link"><i className="icon-list"></i></a>
          </li>

          <li className="nav-item d-md-down-none">
            <a className="nav-link"><i className="icon-location-pin"></i></a>
          </li>

          { login ?  <Logout {...this.props}/> : <Login /> }

          <li className="nav-item d-md-down-none">
            <button className="nav-link navbar-toggler aside-menu-toggler" type="button" onClick={this.asideToggle}>
              &#9776;
            </button>
          </li>

        </ul>
      </header>
    )
  }
}

function mapStateToProps(state) {
  return {
    perPage: state.settings && state.settings.perPage,
    login: state.settings && state.settings.login,
  }
}

export default connect(mapStateToProps)(Header)
