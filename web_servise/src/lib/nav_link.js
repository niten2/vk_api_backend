// import { Link } from 'lib/nav_link'
import React, { Component } from 'react'
import { Link as LinkRouter } from 'react-router-dom'

export class Link extends Component {
  render() {
    let { className, href, children } = this.props

    return (
      <LinkRouter
        className={ className }
        to={ href ? href : "" }
      >{children}</LinkRouter>
    )
  }
}

export const NavLink = ({ href, children, active }) => {
  return (
    <LinkRouter
      className={ active ? "active nav-link" : "nav-link" }
      to={ href ? href : "" }
    >
      {children}
    </LinkRouter>
  )
}

export const NavbarBrand = ({ href, children, active }) => {
  return (
    <LinkRouter
      className={ active ? "active navbar-brand" : "navbar-brand" }
      to={ href ? href : "" }
    >
      {children}
    </LinkRouter>
  )
}
