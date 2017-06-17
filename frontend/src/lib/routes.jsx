import React from 'react'
import { Router, Route, IndexRoute, IndexRedirect, browserHistory } from 'react-router'

// import auth from 'auth'
// import authProvider from 'lib/auth'

// Other pages
import Notfound from 'views/shared/not_found'
import Layout from 'views/layout'
import Main from 'views/main'

import Login from 'views/auth/login'
import VkCallback from 'views/auth/vk_callback'

import Users from 'views/users'
import NewUser from 'views/users/new'

import Tags from 'views/tags'
import NewTag from 'views/tags/new'

import Group from 'views/groups'
import NewGroup from 'views/groups/new'

import Client from 'views/clients'

import Instagram from 'views/instagram'


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
        <IndexRedirect to="/main" />

        <Route path="/main" component={ Main } />
        <Route path="/users" component={ Users } />
        <Route path="/users/new" component={ NewUser } />

        <Route path="/groups" component={ Group } />
        <Route path="/groups/new" component={ NewGroup } />

        <Route path="/tags" component={ Tags } />
        <Route path="/tags/new" component={ NewTag } />

        <Route path="/login" component={ Login } />
        <Route path="/auth/vk/callback" component={ VkCallback } />

        <Route path="/clients" component={ Client } />

        <Route path="/instagram" component={ Instagram } />

        <Route path="*" component={ Notfound } />

      </Route>

    </Router>
  )
}

