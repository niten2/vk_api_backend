import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class NavLink extends Component {
  render() {
    let { href, children, active } = this.props

    return (
      <Link
        className={ active ? "active" : null }
        to={href ? href : ""}
      >{children}</Link>
    )
  }
}

export class NaviLinkHeader extends Component {
  render() {
    let { href, children, active } = this.props

    return (
      <Link
        className={ active ? "active nav-link" : "nav-link" }
        to={ href ? href : "" }
      >
        {children}
      </Link>
    )
  }
}

