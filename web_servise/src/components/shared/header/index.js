import React, { Component } from 'react'
// import { observer } from 'mobx-react'
// import { UIStore } from "stores"
import { Link } from "lib/nav_link"
// import Login from "./login"
// import Logout from "./logout"

class Header extends Component {

  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = { dropdownOpen: false }
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  }

  sidebarToggle(e) {
    e.preventDefault()
    document.body.classList.toggle('sidebar-hidden')
  }

  mobileSidebarToggle(e) {
    e.preventDefault()
    document.body.classList.toggle('sidebar-mobile-show')
  }

  asideToggle(e) {
    e.preventDefault()
    document.body.classList.toggle('aside-menu-hidden')
  }

  render() {
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
            <a className="nav-link"><i className="icon-bell"></i><span className="badge badge-pill badge-danger">5</span></a>
          </li>

          <li className="nav-item d-md-down-none">
            <a className="nav-link"><i className="icon-list"></i></a>
          </li>

          <li className="nav-item d-md-down-none">
            <a className="nav-link"><i className="icon-location-pin"></i></a>
          </li>


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

export default Header
          // { UIStore.login ?  <Logout {...this.props}/> : <Login /> }
