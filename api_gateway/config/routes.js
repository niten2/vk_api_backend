import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'

// import bodyParser from 'body-parser'
// import cors from 'cors'
import AuthMiddleware from 'api/middlewares/auth'
// import AccessLogger from 'api/middlewares/access_logger'
import { buildOptions } from 'api/graphql/config'

export default (app) => {

  app.get('/', (req, res) => {
    res.json({
      servise: "api_gateway",
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
