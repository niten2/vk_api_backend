// import { NavLinkActive } from 'nav_link'
// import { NavLink } from 'nav_link'

// <NavLink
//   to = ""
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
    let { to, children } = this.props
    return (
      <Link
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

// @observer
// export class NavLinkDropdown extends Component {

//   static contextTypes = {
//     router: PropTypes.object.isRequired
//   }

//   static propTypes = {
//     name: PropTypes.string,
//     text: PropTypes.string,
//     icon: PropTypes.string,

//     textOne: PropTypes.string,
//     toOne: PropTypes.string,

//     textTwo: PropTypes.string,
//     toTwo: PropTypes.string,
//   }

//   state = {
//    isActiveOne: false,
//    isActiveTwo: false,
//   }

//   renderIcon() {
//     let { icon } = this.props
//     return(
//       <span className={ icon }/>
//     )
//   }

//   handleClassName = () => {
//     let { name, toOne, toTwo} = this.props
//     let { router } = this.context

//     UIStore.sidebar.setName(name)

//     this.setState({
//       isActiveOne: router.isActive(toOne, true),
//       isActiveTwo: router.isActive(toTwo, true),
//     })
//   }

//   render() {
//     let { name, icon, text, textOne, textTwo, toOne, toTwo} = this.props
//     let { isActiveOne, isActiveTwo } = this.state

//     let classNameMain = UIStore.sidebar.name == name ? "open" : ""
//     let classNameOne = isActiveOne ? "active" : ""
//     let classNameTwo = isActiveTwo ? "active" : ""

//     return (
//       <li
//         className={classNameMain}
//         onClick={ this.handleClassName }
//       >
//         <a>
//           { icon ? this.renderIcon() : null }
//           &nbsp;
//           &nbsp;
//           { text }
//         </a>

//         <ul className="sidebar-nav">
//           <li className={ classNameOne } >
//             <Link to={toOne} >
//               { textOne }
//             </Link>
//           </li>

//           <li className={ classNameTwo } >
//             <Link to={toTwo} >
//               { textTwo }
//             </Link>
//           </li>
//         </ul>

//       </li>
//     )
//   }

// }

