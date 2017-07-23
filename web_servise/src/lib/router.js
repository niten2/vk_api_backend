import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'

import { Layout, LayoutCrm, LayoutVk, LayoutInstagram, LayoutAuth } from "lib/layout_helper"
import NotFound from 'components/shared/not_found'

import Vk from 'components/vk'
// import Users from 'views/vk/users'
// import NewUser from 'views/vk/users/new'
// import Tags from 'views/vk/tags'
// import NewTag from 'views/vk/tags/new'
// import Group from 'views/vk/groups'
// import NewGroup from 'views/vk/groups/new'

import Crm from 'components/crm'
import ClientNew from 'components/crm/clients/new'
import ClientUpdate from 'components/crm/clients/update'

import Instagram from 'components/instagram'

import LoginUser from 'components/auth/login_user'
import CreateUser from 'components/auth/create_user'
import Profile from 'components/auth/profile'

export default (onUpdate) => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <LayoutCrm exact path="/" component={Crm} />

          <LayoutAuth exact path="/login" component={LoginUser}/>
          <LayoutAuth exact path="/auth" component={CreateUser}/>
          <LayoutAuth exact path="/profile" component={Profile}/>

          <LayoutCrm exact path="/crm" component={Crm} />
          <LayoutCrm exact path="/crm/clients/new" component={ClientNew} />
          <LayoutCrm exact path="/crm/clients/:id" component={ClientUpdate} />


          <LayoutVk exact path="/vk" component={Vk}/>
          <LayoutInstagram exact path="/instagram" component={Instagram}/>

          <Layout path="*" component={NotFound}/>
        </Switch>
      </div>
    </BrowserRouter>
  )
}


// <Route path="/vk/users" component={ Users } />
// <Route path="/vk/users/new" component={ NewUser } />
// <Route path="/vk/groups" component={ Group } />
// <Route path="/vk/groups/new" component={ NewGroup } />
// <Route path="/vk/tags" component={ Tags } />
// <Route path="/vk/tags/new" component={ NewTag } />
