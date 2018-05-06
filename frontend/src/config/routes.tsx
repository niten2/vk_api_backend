import * as React from 'react'
import { ApolloProvider } from 'react-apollo'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'

import { client } from 'src/config/apollo_client'
import { PrivateLayout } from 'src/components/shared/layout'
import Dashboard from 'src/components/dashboard'
import Page404 from 'src/components/shared/page404'

import Login from 'src/components/login'
import SignUp from 'src/components/sign_up'
import Profile from 'src/components/profile'

import VkPersons from 'src/components/vk_persons'
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
          <PrivateLayout exact={true} path="/" component={Dashboard} />
          <PrivateLayout exact={true} path="/dashboard" component={Dashboard}/>

          <PrivateLayout exact={true} path="/vk_persons" component={VkPersons}/>

          <PrivateLayout exact={true} path="/profile" component={Profile}/>


          <Redirect to="/404" />
        </Switch>
      </HashRouter>
    </ApolloProvider>
  )
}
