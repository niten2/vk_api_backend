import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import { buildOptions } from 'api/graphql/config'
// import AuthMiddleware from 'api/middlewares/auth'


export default (app) => {

  app.get('/', (req, res) => {
    res.json({
      servise: "api_gateway",
      endpoint: '/v1',
    })
  })

  app.use('/v1',
    // AuthMiddleware(),
    graphqlExpress(buildOptions),
  )

  app.use('/v1', graphiqlExpress({
    endpointURL: '/graphql'
  }))

}
