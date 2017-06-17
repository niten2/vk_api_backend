import React, { PropTypes, Component } from 'react'
import { observer } from 'mobx-react'
import { UIStore } from 'stores'

import { Navbar, Nav, Clearfix, Col } from 'react-bootstrap'
import { NavLink, NaviLinkHeader } from 'nav_link'
import authProvider from 'lib/auth'

@observer
export default class Header extends Component {

  render() {
    return (
      <Navbar className="navbar-inverse">
        <Nav>
          <NaviLinkHeader
            to = "/users"
            >Users</NaviLinkHeader>
          <NaviLinkHeader
            to = "/groups"
            >Groups</NaviLinkHeader>
          <NaviLinkHeader
            to = "/tags"
            >Tags</NaviLinkHeader>
          <NaviLinkHeader
            to = "/clients"
            >Clients</NaviLinkHeader>
          <NaviLinkHeader
            to = "/instagram"
            >Instagram</NaviLinkHeader>
        </Nav>

        <Nav pullRight>
          { UIStore.login ? <RenderLogout /> : <RenderLogin /> }
          { UIStore.login ? <UserName /> : null   }
        </Nav>

      </Navbar>
    )
  }

}

const RenderLogin = () => (
  <NaviLinkHeader
    to = "/login"
  >Login</NaviLinkHeader>
)

const RenderLogout = () => (
  <p
    onClick={() => authProvider.logout()}
    className="pointer navbar-text navbar-right"
  >Logout</p>
)

const UserName = () => (
  <p
    className="navbar-text navbar-right"
  >UserName</p>
)

