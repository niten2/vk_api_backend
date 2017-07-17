// import { AsyncRouter } from 'express-async-router'
// import Passport from './passport'

import {
  graphqlExpress,
  graphiqlExpress,
} from 'graphql-server-express'
import bodyParser from 'body-parser'
import { schema } from 'graphql/schema'

export default (app) => {
  // const app = context.app
	// const api = AsyncRouter()

  // api.all('/', () => ({
  //   app: "auth servise",
  //   version: 'current version /v2 (graphql)',
  // }) )

  // api.use('/v1/users', Users(context))
  // api.use('/v1/tags', Tags(context))
  // api.use('/v1/groups', Groups(context))
  // api.use('/v1/clients', Clients())

  // context.app.use('/', api)
  // context.app.use('/auth', Passport())

  // grahpql
  app.use('/v2', bodyParser.json(), graphqlExpress({
    schema
  }))

  app.use('/v2', graphiqlExpress({
    endpointURL: '/v2'
  }))


  // // catch 404 and forward to error handler
  // context.app.use((req, res, next) => {
  //   var err = new Error('Not Found')
  //   err.status = 404
  //   next(err)
  // })

  // // development error handler will print stacktrace
  // if (context.settings.env == 'development') {
  //   context.app.use((err, req, res, next) => {
  //     res.status(err.status || 500)
  //     res.json({"error": err.message})
  //   })
  // }

  // // production error handler no stacktraces leaked to user
  // context.app.use((err, req, res, next) => {
  //   airbrake.notify(err)
  //   res.status(err.status || 500)
  //   res.render('error', {
  //     message: err.message,
  //     error: err,
  //   })
  // })

}
