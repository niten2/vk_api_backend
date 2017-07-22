import React from 'react'
import settings from "lib/settings"
import { BrowserRouter, Switch } from 'react-router-dom'
import { LayoutWithApollo, Layout } from "lib/layout_helper"

import NotFound from 'components/shared/not_found'

import Instagram from 'components/instagram'

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

import LoginUser from 'components/auth/login_user'
import CreateUser from 'components/auth/create_user'

export default (onUpdate) => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <LayoutWithApollo exact path="/" uri={settings.uriCrmServise} component={Crm} />

          <LayoutWithApollo exact path="/login" uri={settings.uriAuthServise} component={LoginUser}/>
          <LayoutWithApollo exact path="/auth" uri={settings.uriAuthServise} component={CreateUser}/>

          <LayoutWithApollo exact path="/crm" uri={settings.uriCrmServise} component={Crm} />
          <LayoutWithApollo exact path="/crm/clients/new" uri={settings.uriCrmServise} component={ClientNew} />
          <LayoutWithApollo exact path="/crm/clients/:id" uri={settings.uriCrmServise} component={ClientUpdate} />

          <LayoutWithApollo exact path="/vk" uri={settings.uriVkServise} component={Vk}/>
          <LayoutWithApollo exact path="/instagram" uri={settings.uriInstaServise} component={Instagram}/>

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
