import React, { Component } from 'react'
import { observer } from 'mobx-react'

import {
  Collapse,
  // Nav,
  Navbar,
  // NavItem,
  NavbarToggler,
} from 'reactstrap'

// import { NavLink } from 'lib/nav_link'
import { UIStore } from "stores"
import Login from "./login"
import Logout from "./logout"

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
