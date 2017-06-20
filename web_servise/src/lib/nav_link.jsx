// import { NavLinkActive } from 'nav_link'
// import { NavLink } from 'nav_link'

// <NavLink
//   to = ""
//   active = {true}
// ></NavLink>

// <NavLinkActive
//   to = ""
//   ></NavLinkActive>

// <NavLinkDropdown
//   text="Computers"
//   icon="rubix-icon icon-ikons-imac"

//   textOne="Statistics"
//   toOne = "statistic_computers"

//   textTwo="List of All Computers"
//   toTwo="list_computers"
// />

import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { UIStore } from 'stores'
import { observer } from 'mobx-react'

export class NavLink extends Component {
  render() {
    let { to, children, active } = this.props
    return (
      <Link
        className={ active ? "active" : null }
        to={to ? to : ""}
        activeClassName="active"
      >{children}</Link>
    )
  }
}

export class NaviLinkHeader extends Component {

    static contextTypes = {
      router: PropTypes.object.isRequired
    }

    static propTypes = {
      name: PropTypes.string,
      to: PropTypes.string,
      icon: PropTypes.string,
      onClick: PropTypes.func,
    }

    handleClassName = () => {
      let { name } = this.props
      // UIStore.sidebar.setName(name)
    }

    renderIcon() {
      let { icon } = this.props
      return(
        <span className={ icon }/>
      )
    }

    render() {
      let { onClick, to, icon } = this.props
      let { router } = this.context
      let className = null
      if (to) {
        let isActive = router.isActive(to, true)
        let className = isActive ? "active" : ""
      }

      return (
        <li
          className={className}
          onClick={this.handleClassName}
        >
          <Link
            to={ to ? to : "/" }
            onClick={ onClick }
          >
            { icon ? this.renderIcon() : null }
            &nbsp;
            &nbsp;
            {this.props.children}
          </Link>
        </li>
      )
    }
}

