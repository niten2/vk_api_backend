import React from 'react'
import Layout from 'components/shared/layout'
import Login from 'components/auth/login'
import Register from 'components/auth/register'
import Profile from 'components/auth/profile'
import Settings from 'components/auth/settings'

const Auth = () => (
  <div>
    <Layout exact path="/login" component={Login}/>
    <Layout exact path="/register" component={Register}/>
    <Layout exact path="/profile" component={Profile}/>
    <Layout exact path="/settings" component={Settings}/>
  </div>
)

export default Auth
