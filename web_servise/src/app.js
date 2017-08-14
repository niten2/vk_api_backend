import React from 'react'
import { Provider } from 'react-redux'
import { history, configureStore } from 'store'
import { Route, Redirect, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import {
  Layout,
  LayoutCrm,
  LayoutVk,
  LayoutInstagram,
  LayoutAuthPublic,
  LayoutAuthPrivate
} from "components/shared/layout/helpers"

// shared
import Page404 from 'components/shared/page404'

// auth
import Login from 'components/auth/public/login'
import Register from 'components/auth/public/register'
import Profile from 'components/auth/private/profile'

import Dashboard from 'components/shared/dashboard'

// crm
import Clients from 'components/crm/clients/list'
import ClientNew from 'components/crm/clients/new'
import ClientUpdate from 'components/crm/clients/update'
import Status from 'components/crm/statuses'

// vk
import Vk from 'components/vk'
import VkPersons from 'components/vk/persons'
import VkTags from 'components/vk/tags'
import VkGroups from 'components/vk/groups'

// insta
import Instagram from 'components/instagram'

import Test from 'components/test'

export default (onUpdate) => {
  const store = configureStore()

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>

          <Layout exact path="/test" name="test" component={Test}/>

          <LayoutAuthPublic exact path="/dashboard" name="Dashboard" component={Dashboard}/>

          <LayoutAuthPublic exact path="/login" component={Login}/>
          <LayoutAuthPublic exact path="/register" component={Register}/>
          <LayoutAuthPrivate exact path="/profile" component={Profile}/>


          <Route exact path='/crm' render={() => <Redirect to='/crm/clients/1' />} />
          <Route exact path='/crm/clients' render={() => <Redirect to='/crm/clients/1' />} />
          <LayoutCrm exact path="/crm/clients/:page" component={Clients}/>

          <LayoutCrm exact path="/crm/clients/new" component={ClientNew} />
          <LayoutCrm exact path="/crm/clients/update/:id" component={ClientUpdate} />

          <Route exact path='/crm/statuses' render={() => <Redirect to='/crm/statuses/1' />} />
          <LayoutCrm exact path="/crm/statuses/:page" component={Status}/>

          <LayoutVk exact path="/vk" component={Vk}/>
          <Route exact path='/vk/persons' render={() => <Redirect to='/vk/persons/1' />} />
          <LayoutVk exact path="/vk/persons/:page" component={VkPersons}/>
          <Route exact path='/vk/groups' render={() => <Redirect to='/vk/groups/1' />} />
          <LayoutVk exact path="/vk/groups/:page" component={VkGroups}/>
          <LayoutVk exact path="/vk/tags" component={VkTags}/>

          <LayoutInstagram exact path="/instagram" component={Instagram}/>

          <Redirect exact from="/" to="/dasboard"/>
          <Layout path="*" component={Page404}/>
        </Switch>
      </ConnectedRouter>
    </Provider>
  )
}
