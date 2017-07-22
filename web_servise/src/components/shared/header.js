import React, { Component } from 'react'
import { observer } from 'mobx-react'
import {
  Collapse,
  Nav,
  Navbar,
  NavItem,
  NavbarToggler,
} from 'reactstrap'
import authProvider from 'lib/auth_provider'

import { NavLink } from 'lib/nav_link'
import { UIStore } from "stores"

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

  touchSidebar() {
    UIStore.sidebar = !UIStore.sidebar
  }

  render() {
    return (
       <div>
          <Navbar full="true" color="faded" toggleable>
            <NavbarToggler onClick={this.toggle} />

            <a onClick={this.touchSidebar}>
              <i className="fa fa-navicon fa-2x py-2 p-1" />
            </a>


            <Collapse isOpen={this.state.isOpen} navbar>
              { UIStore.login ?  <Logout /> : <Login /> }
            </Collapse>


          </Navbar>
      </div>
    )
  }

})

const Login = () => (
  <Nav className="ml-auto" navbar>
    <NavItem>
      <NavLink
        href = "/login"
      >Sign In</NavLink>
    </NavItem>
    <NavItem>
      <NavLink
        href = "/auth"
      >Sign Up</NavLink>
    </NavItem>
  </Nav>
)

const Logout = () => (
  <Nav className="ml-auto" navbar>
    <NavItem>
      <NavLink>UserName</NavLink>
    </NavItem>

    <NavItem
      onClick={() => {
          authProvider.removeToken()
          console.log("Logout")
        }
      }
    >
      <NavLink>Logout</NavLink>
    </NavItem>
  </Nav>
)
