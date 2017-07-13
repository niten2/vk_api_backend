import React, { Component } from 'react'
import { observer } from 'mobx-react'
import {
  Collapse,
  Nav,
  Navbar,
  NavItem,
  NavbarToggler,
} from 'reactstrap'

import {
  NavLink,
  NavbarBrand,
} from 'lib/nav_link'

// import authProvider from 'lib/auth'
// import { UIStore } from 'stores'

export default observer(class Header extends Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
       <div>
          <Navbar color="faded" light toggleable>
            <NavbarToggler left onClick={this.toggle} />

            <NavbarBrand href="/">CRM</NavbarBrand>

            <Collapse left isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/crm">Crm</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/vk">Vk</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/instagram">Instagram</NavLink>
                </NavItem>
              </Nav>
            </Collapse>

            <Login />
            <Logout />

          </Navbar>
      </div>
    )
  }

})

const Login = () => (
  <NavLink
    to = "/login"
  >Login</NavLink>
)

const Logout = () => (
  <NavLink
    onClick={() => console.log("Logout")}
    className="pointer navbar-text navbar-right"
  >Logout</NavLink>
)

const UserName = () => (
  <p
    className="navbar-text navbar-right"
  >UserName</p>
)
