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
            to = "/crm"
            >crm</NaviLinkHeader>
          <NaviLinkHeader
            to = "/instagram"
            >Instagram</NaviLinkHeader>
          <NaviLinkHeader
            to = "/vk"
            >vk</NaviLinkHeader>
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

