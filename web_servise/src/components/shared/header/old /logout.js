import React from 'react'
import authProvider from 'lib/auth_provider'
import { NavLink } from 'lib/nav_link'
import {
  Nav,
  Popover,
  // Button,
} from 'reactstrap'

class Logout extends React.Component {

  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      popoverOpen: false
    }
  }

  toggle() {
    this.setState({ popoverOpen: !this.state.popoverOpen })
  }

  logout = () => {
    authProvider.removeToken()
    console.log("Logout")
  }

  render() {
    return (
      <Nav className="ml-auto" navbar>
        <div className="text-center">
          <div className="pointer" id="Popover1" onClick={this.toggle}>
            UserName
          </div>

          <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>

            <NavLink href="/profile">Profile</NavLink>

            <div onClick={this.logout}>
              <NavLink >Logout</NavLink>
            </div>

          </Popover>
        </div>
      </Nav>
    )
  }
}

export default Logout
