import { graphqlExpress, graphiqlExpress } from 'graphql-server-express'
import bodyParser from 'body-parser'
import { buildOptions } from 'api/graphql/config'
console.log(buildOptions)

export default (app) => {

  app.get('/', (req, res) => (
    res.json({
      servise: "crm_servise",
      version: 'current version /v1 with graphql',
      endpoint: '/v1',
    })
  ))

  app.use('/v1',
    bodyParser.json(),
    graphqlExpress(buildOptions)
  )

  app.use('/v1', graphiqlExpress({
    endpointURL: '/graphql'
  }))

}
