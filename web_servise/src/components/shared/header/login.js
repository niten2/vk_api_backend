import React from 'react'
import { NavLink } from 'lib/nav_link'
import {
  Nav,
  NavItem,
} from 'reactstrap'

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

export default Login
