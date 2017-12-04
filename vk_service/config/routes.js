import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import { buildOptions } from 'api/graphql/config'
import settings from 'config/settings'
import AuthMiddleware from 'api/middlewares/auth'

export default (app) => {

  app.get('/', (req, res) => {
    res.json({
      servise: settings.name,
      endpoint: '/v1',
    })
  })

  app.use('/v1',
    AuthMiddleware(),
    graphqlExpress(buildOptions),
  )

  app.use('/v1', graphiqlExpress({
    endpointURL: '/graphql'
  }))

}
