import { graphqlExpress, graphiqlExpress } from 'graphql-server-express'
import bodyParser from 'body-parser'
import { schema } from 'api/graphql/schema'

export default (app) => {

  app.get('/', (req, res) => (
    res.json({
      servise: "crm_servise",
      version: 'current version /v2 with graphql'
    })
  ))

  app.use('/v2', bodyParser.json(), graphqlExpress({
    schema
  }))

  app.use('/v2', graphiqlExpress({
    endpointURL: '/v2'
  }))

}
