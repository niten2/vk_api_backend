import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import bodyParser from 'body-parser'
import AuthMiddleware from 'api/middlewares/auth'
import { buildOptions } from 'api/graphql/config'

export default (app) => {

  app.get('/', (req, res) => (
    res.json({
      servise: "api_gateway",
      endpoint: '/v1',
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
