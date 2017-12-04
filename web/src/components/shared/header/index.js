import React, { Component } from 'react'
import { connect } from 'react-redux'
import Login from "./login"
import AuthUser from "./auth_user"

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
          </li>
        </ul>

        <ul className="nav navbar-nav ml-auto">

          { login ?  <AuthUser {...this.props} /> : <Login {...this.props} /> }

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

const mapStateToProps = (props) => {
  return {
    login: props.settings.login,
    name: props.settings.name,
  }
}

export default connect(mapStateToProps)(Header)
