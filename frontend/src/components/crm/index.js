import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Layout from 'components/shared/layout'

import Clients from 'components/crm/clients/list'

import ClientNew from 'components/crm/clients/new'
import ClientUpdate from 'components/crm/clients/update'
import Status from 'components/crm/statuses'

const Crm = () => {
  return (
    <div>
      <Route exact path='/crm' render={() => <Redirect to='/crm/clients/1' />} />
      <Route exact path='/crm/clients' render={() => <Redirect to='/crm/clients/1' />} />
      <Layout exact path="/crm/clients/:page" component={Clients}/>

      <Layout exact path="/crm/clients/new" component={ClientNew} />
      <Layout exact path="/crm/clients/update/:id" component={ClientUpdate} />

      <Route exact path='/crm/statuses' render={() => <Redirect to='/crm/statuses/1' />} />
      <Layout exact path="/crm/statuses/:page" component={Status}/>
    </div>
  )
}

export default Crm
