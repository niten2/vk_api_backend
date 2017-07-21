import { graphqlExpress, graphiqlExpress } from 'graphql-server-express'
import bodyParser from 'body-parser'
import { schema } from 'api/graphql/schema'

export default (app) => {
  app.use('/v2', bodyParser.json(), graphqlExpress({
    schema
  }))

  app.use('/v2', graphiqlExpress({
    endpointURL: '/v2'
  }))

}
