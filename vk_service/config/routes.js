import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import bodyParser from 'body-parser'
import settings from 'config/settings'

import AuthMiddleware from 'api/middlewares/auth'
import { buildOptions } from 'api/graphql/config'

export default (app) => {

  app.get('/', (req, res) => (
    res.json({
      servise: "vk_service",
      version: 'current version /v1 with graphql'
    })
  ))

  app.use('/v1', graphqlExpress(buildOptions))

  app.use(
    '/v1',
    graphiqlExpress({
      endpointURL: '/graphql',
      subscriptionsEndpoint: `ws://localhost:${settings.port}/subscriptions`,
    })
  )

}
