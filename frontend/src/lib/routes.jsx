import React from 'react'
import { Router, Route, IndexRoute, IndexRedirect, browserHistory } from 'react-router'

// import auth from 'auth'
// import authProvider from 'lib/auth'

// Other pages
import Notfound from 'views/shared/not_found'
import Layout from 'views/common/layout'
import Main from 'views/common/main'
import Login from 'views/common/auth/login'
import VkCallback from 'views/common/auth/vk_callback'

import Instagram from 'views/instagram'

import Vk from 'views/vk'
import Users from 'views/vk/users'
import NewUser from 'views/vk/users/new'
import Tags from 'views/vk/tags'
import NewTag from 'views/vk/tags/new'
import Group from 'views/vk/groups'
import NewGroup from 'views/vk/groups/new'

import Crm from 'views/crm'
import Client from 'views/crm/clients'

function handleRootRouteEnter (nextState, replaceState) {
  const regHashMask = /^#\/?/
  const { hash } = nextState.location
  const isHashedRoute = regHashMask.test(hash)
  if (isHashedRoute) {
    const newPathname = hash.replace(regHashMask, '/')
    replaceState(null, newPathname)
  }
}

export default (onUpdate) => {
  return (
	  <Router history={ browserHistory } onUpdate={onUpdate}>
      <Route
        path='/'
        component={ Layout }
        onEnter={ ( nextState, replaceState ) => handleRootRouteEnter(nextState, replaceState) }
      >
        <IndexRedirect to="/vk" />

        <Route path="/main" component={ Main } />

        <Route path="/login" component={ Login } />
        <Route path="/auth/vk/callback" component={ VkCallback } />


        <Route path="/instagram" component={ Instagram } />

        <Route path="/crm" component={ Crm } />
        <Route path="/crm/clients" component={ Client } />

        <Route path="/vk" component={ Vk } />
        <Route path="/vk/users" component={ Users } />
        <Route path="/vk/users/new" component={ NewUser } />
        <Route path="/vk/groups" component={ Group } />
        <Route path="/vk/groups/new" component={ NewGroup } />
        <Route path="/vk/tags" component={ Tags } />
        <Route path="/vk/tags/new" component={ NewTag } />


        <Route path="*" component={ Notfound } />

      </Route>

    </Router>
  )
}

