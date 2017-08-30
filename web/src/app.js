import React from 'react'
import { Provider } from 'react-redux'
import { ApolloProvider } from 'react-apollo'
import { history, configureStore } from 'store'
import { Route, Redirect, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import { configureClient } from 'lib/apollo_client'
// import { loadConfig } from "actions/auth"

// shared
import Layout from 'components/shared/layout'
import Page404 from 'components/shared/page404'

// auth
import Login from 'components/auth/login'
import Register from 'components/auth/register'
import Profile from 'components/auth/profile'
import Settings from 'components/auth/settings'

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

export default (onUpdate) => {

  const store = configureStore()
  const client = configureClient()
  // store.dispatch(loadConfig())

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ApolloProvider store={store} client={client}>

          <Switch>

            <Layout exact path="/dashboard" name="Dashboard" component={Dashboard}/>

            <Layout exact path="/login" component={Login}/>
            <Layout exact path="/register" component={Register}/>
            <Layout exact path="/profile" component={Profile}/>
            <Layout exact path="/settings" component={Settings}/>

            <Layout exact path="/crm/clients/new" component={ClientNew} />
            <Route exact path='/crm' render={() => <Redirect to='/crm/clients/1' />} />
            <Route exact path='/crm/clients' render={() => <Redirect to='/crm/clients/1' />} />
            <Layout exact path="/crm/clients/:page" component={Clients}/>

            <Layout exact path="/crm/clients/update/:id" component={ClientUpdate} />

            <Route exact path='/crm/statuses' render={() => <Redirect to='/crm/statuses/1' />} />
            <Layout exact path="/crm/statuses/:page" component={Status}/>

            <Layout exact path="/vk" component={Vk}/>
            <Route exact path='/vk/persons' render={() => <Redirect to='/vk/persons/1' />} />
            <Layout exact path="/vk/persons/:page" component={VkPersons}/>
            <Route exact path='/vk/groups' render={() => <Redirect to='/vk/groups/1' />} />
            <Layout exact path="/vk/groups/:page" component={VkGroups}/>
            <Layout exact path="/vk/tags" component={VkTags}/>

            <Layout exact path="/instagram" component={Instagram}/>

            <Redirect exact from="/" to="/dashboard"/>
            <Layout path="*" component={Page404}/>
          </Switch>

        </ApolloProvider>
      </ConnectedRouter>
    </Provider>
  )
}
