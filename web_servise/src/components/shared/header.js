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
} from 'lib/nav_link'
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
              <Nav className="ml-auto" navbar>
                <Login />
                <Auth />
              </Nav>
            </Collapse>


          </Navbar>
      </div>
    )
  }

})

const Login = () => (
  <NavItem>
    <NavLink
      href = "/login"
    >Sign In</NavLink>
  </NavItem>
)

const Auth = () => (
  <NavItem>
    <NavLink
      href = "/auth"
    >Sign Up</NavLink>
  </NavItem>
)

// <Logout />
// const Logout = () => (
//   <NavLink
//     onClick={() => console.log("Logout")}
//     className="pointer navbar-text navbar-right"
//   >Logout</NavLink>
// )

// const UserName = () => (
//   <NavLink>UserName</NavLink>
// )
