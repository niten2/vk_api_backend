import * as React from 'react'
import { ApolloProvider } from 'react-apollo'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'

import { client } from 'src/config/apollo_client'
import { PrivateLayout } from 'src/components/shared/layout'

import IndexPage from 'src/pages/index'

import Page404 from 'src/components/shared/page404'

import SignIn from 'src/pages/sign_in'
import SignUp from 'src/pages/sign_up'

import Profile from 'src/components/profile'

import VkFriendsAll from 'src/pages/vk/friends_all'
import VkFriendsToday from 'src/pages/vk/friends_today'
import VkFriendNew from 'src/pages/vk/new'
import VkSetUsersInfo from 'src/pages/vk/set_users_info'

import Log from 'src/pages/log'

export default () => {
  return (
    <ApolloProvider client={client}>
      <HashRouter>
        <Switch>
          <Route exact={true} path="/sign_in" component={SignIn}/>
          <Route exact={true} path="/sign_up" component={SignUp}/>

          <Route exact={true} path="/404" component={Page404}/>

          <PrivateLayout exact={true} path="/" component={IndexPage} />

          <PrivateLayout exact={true} path="/vk/friends/all" component={VkFriendsAll}/>
          <PrivateLayout exact={true} path="/vk/friends/today" component={VkFriendsToday}/>
          <PrivateLayout exact={true} path="/vk/friends/new" component={VkFriendNew}/>
          <PrivateLayout exact={true} path="/vk/friends/set_users_info" component={VkSetUsersInfo}/>

          <PrivateLayout exact={true} path="/profile" component={Profile}/>
          <PrivateLayout exact={true} path="/logs" component={Log}/>


          <Redirect to="/404" />
        </Switch>
      </HashRouter>
    </ApolloProvider>
  )
}
