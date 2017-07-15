import React from 'react'
import GraphiQL from 'graphiql'
import fetch from 'isomorphic-fetch'
import { isUri } from 'valid-url'

const options = {
  method: 'post',
  headers: { 'Content-Type': 'application/json' }
}

const endpoint = 'http://localhost:4002/v2/graphql'

const defaultQuery = `

# mutation addClient {
#   addClient(name: "1234", number: "66666") {
#     name
#     number
#   }
# }

query clients {
  clients {
    id
    name
    number
    phone
    note
    date_birth
  }
}


`

export default class App extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      defaultQuery,
      endpoint,
      fetcher: this.createFetcher(endpoint)
    }
  }

  createFetcher = endpoint => param => fetch(
    endpoint, { ...options, body: JSON.stringify(param) }
  ).then(response => response.json())

  changeEndpoint = endpoint => this.setState({
    endpoint,
    fetcher: this.createFetcher(endpoint)
  })

  validateAndChangeEndpoint = endpoint => isUri(endpoint)
    ? this.changeEndpoint(endpoint)
    : (window.alert('Invalid url'), this.chooseEndpoint())

  chooseEndpoint = () => this.validateAndChangeEndpoint(
    window.prompt('Choose the new endpoint', this.state.endpoint)
  )

  setRef = c => (
    this.graphiql = c
  )

  render () {
    return (
      <div id='container'>
        <GraphiQL
          ref={ this.setRef }
          fetcher={ this.state.fetcher }
          defaultQuery={ this.state.defaultQuery }
        >
          <GraphiQL.Logo>
            CRM
          </GraphiQL.Logo>

          <GraphiQL.Toolbar>
            <GraphiQL.Button
              label='Change endpoint'
              title='Change endpoint'
              onClick={ this.chooseEndpoint }
            />
            <span>Endpoint: <strong>{ this.state.endpoint }</strong></span>
          </GraphiQL.Toolbar>
        </GraphiQL>
      </div>
    )
  }
}
