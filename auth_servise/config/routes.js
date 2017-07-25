import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import bodyParser from 'body-parser'
import { schema } from 'api/graphql/schema'
import jwt from 'express-jwt'
import settings from 'config/settings'

var operationNameFilter = (req) => {
  const { operationName } = req.body
  return [
    "UserCreate",
    "JwtTokenCreate"
  ].includes(operationName)
}

export default (app) => {

  app.get('/', (req, res) => (
    res.json({
      servise: "auth_servise",
      version: 'current version /v2 with graphql'
    })
  ))

  app.use('/v2',
    bodyParser.json(),
    jwt({secret: settings.jwt_secret_key}).unless(operationNameFilter),
    jwt({secret: settings.jwt_secret_key}),
    graphqlExpress(request => ({
      context: { user: request.user },
      schema: schema,
    }))
  )

  app.use('/v2', graphiqlExpress({
    endpointURL: '/v2'
  }))

}
