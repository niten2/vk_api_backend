import { AsyncRouter } from 'express-async-router'
import Settings from "config/settings"
import Clients from './clients'

// import GraphqlApi from "./graphql_api"

// grahpql
import bodyParser from 'body-parser'
import {
  graphqlExpress,
  graphiqlExpress,
} from 'graphql-server-express'

import { schema } from 'api/resourses/schema'
// grahpql


export default (context) => {
  const app = context.app
	const api = AsyncRouter()

  api.all('/', () => ({ version: 'current version /v1', servise: "crm" }) )
  api.use('/v1/clients', Clients)

  context.app.use('/', api)

  // context.app.use('/graphql', GraphqlApi)


  // grahpql
  api.use('/v2/graphql', bodyParser.json(), graphqlExpress({
    schema
  }))

  api.use('/v2/graphiql', graphiqlExpress({
    endpointURL: '/v2/graphql'
  }))
  // grahpql



  catch_404_and_forward_to_error_handler(app)
  development_error_handler_will_print_stacktrace(app)
  production_error_handler_no_stacktraces_leaked_to_user(app)
}

const catch_404_and_forward_to_error_handler = (app) => {
  app.use((req, res, next) => {
    var err = new Error('Not Found')
    err.status = 404
    next(err)
  })
}

const development_error_handler_will_print_stacktrace = (app) => {
  if (Settings.env == 'development') {
    app.use((err, req, res, next) => {
      res.status(err.status || 500)
      res.json({"error": err.message})
    })
  }
}

const production_error_handler_no_stacktraces_leaked_to_user = (app) => {
  app.use((err, req, res, next) => {
    airbrake.notify(err)
    res.status(err.status || 500)
    res.render('error', {
      message: err.message,
      error: err,
    })
  })
}
