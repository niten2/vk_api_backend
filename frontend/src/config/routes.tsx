import * as React from 'react'
import { ApolloProvider } from 'react-apollo'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'

import { client } from 'src/config/apollo_client'
import { PrivateLayout } from 'src/components/shared/layout'

import IndexPage from 'src/pages/index'

import Page404 from 'src/components/shared/page404'

import Login from 'src/components/login'
import SignUp from 'src/components/sign_up'
import Profile from 'src/components/profile'

import VkFriendsAll from 'src/pages/vk/friends_all'
import VkFriendsToday from 'src/pages/vk/friends_today'
import VkFriendNew from 'src/pages/vk/new'

// import NewUser from 'src/components/users/new'
// import ShowUser from 'src/components/users/show'

// import Client from 'src/components/clients'
// import NewClient from 'src/components/clients/new'
// import ShowClient from 'src/components/clients/show'

// import IndexLoansClient from 'src/components/clients/loans'
// import EditLoanClient from 'src/components/clients/loans/edit'

export default () => {
  return (
    <ApolloProvider client={client}>
      <HashRouter>
        <Switch>
          <Route exact={true} path="/login" component={Login}/>
          <Route exact={true} path="/sign_up" component={SignUp}/>

          <Route exact={true} path="/404" component={Page404}/>

          <PrivateLayout exact={true} path="/" component={IndexPage} />

          <PrivateLayout exact={true} path="/vk/friends/all" component={VkFriendsAll}/>
          <PrivateLayout exact={true} path="/vk/friends/today" component={VkFriendsToday}/>
          <PrivateLayout exact={true} path="/vk/friends/new" component={VkFriendNew}/>

          <PrivateLayout exact={true} path="/profile" component={Profile}/>


          <Redirect to="/404" />
        </Switch>
      </HashRouter>
    </ApolloProvider>
  )
}
