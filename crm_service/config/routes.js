import { graphqlExpress, graphiqlExpress } from 'graphql-server-express'
import bodyParser from 'body-parser'
import { schema } from 'api/graphql/schema'

export default (app) => {

  app.get('/', (req, res) => (
    res.json({
      servise: "crm_servise",
      version: 'current version /v1 with graphql'
    })
  ))

  app.use('/v1',
    bodyParser.json(),
    graphqlExpress({
      schema
    })
  )

  app.use('/v1', graphiqlExpress({
    endpointURL: '/graphql'
  }))

}
