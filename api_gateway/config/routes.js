import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import bodyParser from 'body-parser'
import settings from 'config/settings'

import AuthMiddleware from 'api/middlewares/auth'
import { buildOptionsPublic, buildOptionsPrivate } from 'api/graphql/config'


export default (app) => {

  app.get('/', (req, res) => (
    res.json({
      servise: "auth_servise",
      endpoints: {
        private: '/v2 ',
        public: '/v2/public',
      }
    })
  ))

  app.use('/v2/private',
    bodyParser.json(),
    AuthMiddleware(),
    graphqlExpress(buildOptionsPrivate)
  )

  app.use(
    '/v2/private',
    graphiqlExpress({ endpointURL: '/graphql' })
  )

  app.use('/v2/public',
    bodyParser.json(),
    graphqlExpress(buildOptionsPublic)
  )

  app.use(
    '/v2/public',
    graphiqlExpress({ endpointURL: '/graphql' })
  )

}
