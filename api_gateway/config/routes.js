import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import bodyParser from 'body-parser'
import settings from 'config/settings'

import AuthMiddleware from 'api/middlewares/auth'
import { buildOptions } from 'api/graphql/config'

export default (app) => {

  app.get('/', (req, res) => (
    res.json({
      servise: "api_gateway",
      endpoints: {
        private: '/v2 ',
        public: '/v2/public',
      }
    })
  ))

  app.use('/v1',
    bodyParser.json(),
    AuthMiddleware(),
    graphqlExpress(buildOptions)
  )

  app.use('/v1', graphiqlExpress({
    endpointURL: '/graphql'
  }))

}
