import React from 'react'
import { Redirect, BrowserRouter, Switch } from 'react-router-dom'

import { Layout, LayoutCrm, LayoutVk, LayoutInstagram, LayoutAuth } from "lib/layout_helper"
import Page404 from 'components/shared/page404'

import Vk from 'components/vk'
import VkUsers from 'components/vk/users'
// import NewUser from 'views/vk/users/new'
import VkTags from 'components/vk/tags'
// import NewTag from 'views/vk/tags/new'
import VkGroups from 'components/vk/groups'
// import NewGroup from 'views/vk/groups/new'

import Clients from 'components/crm/clients/list'
import ClientNew from 'components/crm/clients/new'
import ClientUpdate from 'components/crm/clients/update'

import Status from 'components/crm/statuses'

import Instagram from 'components/instagram'

import Login from 'components/auth/login'
import Register from 'components/auth/register'
import Profile from 'components/auth/profile'

// import Login from 'views/Pages/Login'
import Dasboard from 'components/shared/dasboard'


export default (onUpdate) => {
  return (
    <BrowserRouter>
      <div>
        <Switch>

          <Layout exact path="/dasboard" name="Dasboard" component={Dasboard}/>

          <LayoutAuth exact path="/login" component={Login}/>
          <LayoutAuth exact path="/register" component={Register}/>
          <LayoutAuth exact path="/profile" component={Profile}/>

          <LayoutCrm exact path="/crm/clients" component={Clients} />
          <LayoutCrm exact path="/crm/clients/new" component={ClientNew} />
          <LayoutCrm exact path="/crm/clients/:id" component={ClientUpdate} />

          <LayoutCrm exact path="/crm/statuses" component={Status} />


          <LayoutVk exact path="/vk" component={Vk}/>
          <LayoutVk exact path="/vk/users" component={VkUsers}/>
          <LayoutVk exact path="/vk/groups" component={VkGroups}/>
          <LayoutVk exact path="/vk/tags" component={VkTags}/>

          <LayoutInstagram exact path="/instagram" component={Instagram}/>

          <Layout path="*" component={Page404}/>
          <Redirect from="/" to="/dasboard"/>
        </Switch>
      </div>
    </BrowserRouter>
  )
}
