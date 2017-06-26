import React, { Component } from 'react'
// import Clients from './clients'

import ListClients from './clients/list'

// import Settings from "lib/settings"
// import {
//   ApolloClient,
//   ApolloProvider,
//   createNetworkInterface,
// } from 'react-apollo'

// const networkInterface = createNetworkInterface({ uri: `${Settings.crm_servise}/graphql` })
// const client = new ApolloClient({ networkInterface })


export default class Index extends Component {

  render() {
    return (
      <div className="text-center">
        CRM
        <ListClients />
      </div>
    )
  }

}

// <Clients />
      // <ApolloProvider client={client}>
      // </ApolloProvider>
