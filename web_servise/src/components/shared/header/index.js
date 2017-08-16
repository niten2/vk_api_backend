import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from "lib/nav_link"
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
    const { name, login } = this.props
    console.log(name)

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
            { login ?  <Link className="nav-link" href="settings">Settings</Link> : null }
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

          { login ?  <Logout name={name} {...this.props}/> : <Login/> }

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

// const mapStateToProps = (state, ownProps) => {
const mapStateToProps = (opt) => {
  console.log(opt)
  return {
    // perPage: ownProps.settings.perPage,
    // login: ownProps.settings.login,
    // name: ownProps.settings.name,
  }
}

export default connect(mapStateToProps)(Header)
