import * as React from "react"
import { withRouter } from "react-router"
import { withApollo } from "react-apollo"
import AuthProvider from "src/config/auth_provider"
import Spinner from 'src/components/shared/spinner'
import Page500 from 'src/components/shared/page500'
import { withData } from "./queries"

class Header extends React.Component<any, any> {

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

  handleLogout = () => {
    AuthProvider.removeToken()

    this.props.client.resetStore()
    this.props.history.push("/login")

    console.log("logout")
  }

  render() {
    let { me, loading, error } = this.props.meQuery

    if (loading ) {
      return <Spinner />
    }

    if (error) {
      return <Page500 />
    }

    return (
      <header className="app-header navbar">
        <button
          className="navbar-toggler mobile-sidebar-toggler d-lg-none"
          type="button"
          onClick={this.mobileSidebarToggle}
        >
          &#9776;
        </button>

        <a className="navbar-brand">Credit Site</a>

        <ul className="nav navbar-nav d-md-down-none">
          <li className="nav-item">
            <button
              className="nav-link navbar-toggler sidebar-toggler"
              type="button"
              onClick={this.sidebarToggle}
            >
              &#9776;
            </button>
          </li>

        </ul>

        <ul className="nav navbar-nav ml-auto">

          <li className="d-md-down-none nav-item">
            <button className="btn btn-secondary">
              {me.email}
            </button>
            &nbsp;
          </li>

          <li onClick={this.handleLogout} className="nav-item pointer">
            <button className="btn btn-info">
              Logout
            </button>
            &nbsp;&nbsp;
          </li>

        </ul>
      </header>
    )
  }
}

export default withRouter(
  withApollo(
    withData(Header)
  )
)
