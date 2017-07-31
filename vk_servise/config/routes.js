import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import bodyParser from 'body-parser'
import settings from 'config/settings'

import AuthMiddleware from 'api/middlewares/auth'
import { buildOptions } from 'api/graphql/config'

export default (app) => {

  app.get('/', (req, res) => (
    res.json({
      servise: "vk_servise",
      endpoints: {
        private: '/v2 ',
      }
    })
  ))

  app.use(
    '/v2',
    AuthMiddleware(),
    graphqlExpress(buildOptions)
  )

  app.use(
    '/v2',
    graphiqlExpress({
      endpointURL: '/graphql',
      subscriptionsEndpoint: `ws://localhost:${settings.port}/subscriptions`,
    })
  )

}
