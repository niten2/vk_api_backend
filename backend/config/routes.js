import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import { buildOptions } from 'app/graphql/config'

export default (app) => {
  app.get('/', (req, res) => {
    res.json({
      servise: "api_gateway",
      endpoint: '/v1',
    })
  })

  app.use('/v1', graphqlExpress(buildOptions))
  app.use('/v1', graphiqlExpress({ endpointURL: '/graphql' }))
}
