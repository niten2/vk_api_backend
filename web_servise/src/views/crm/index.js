import React, { PropTypes, Component } from 'react'

import { NavLink } from 'nav_link'

import Clients from './clients'

export default class Index extends Component {


  render() {
    return (
      <div className="text-center">

        crm

        <Clients />



        <div>
          <NavLink to="/crm/clients/new">
            <button>
              New
            </button>
          </NavLink>
        </div>


      </div>
    )
  }

}

