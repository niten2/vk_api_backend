import { createApolloFetch } from 'apollo-fetch'
import jsonwebtoken from 'jsonwebtoken'
import settings from 'config/settings'

const uri = `http://localhost:${settings.port}/v1`

const apolloFetch = createApolloFetch({ uri })

const createJwtTest = () => {
  return jsonwebtoken.sign(
    {
      user_id: 1,
      email: "test@test.com",
    },
    settings.jwt_secret_key,
    {
      expiresIn: 10000000000
    }
  )
}

const middleware = (req, options, next) => {
  // TODO send user.id
  // console.log(req, options, next)

  if (!req.options.headers) {
    req.options.headers = {}
  }
  req.options.headers.authorization = `Token ${createJwtTest()}`
  next()
}


export const graphqlQuery = (query, variables, user) => {
  if (user) {
    apolloFetch.use(middleware)
  }

  return apolloFetch({ query, variables})
}

