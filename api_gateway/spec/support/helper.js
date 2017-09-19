import { createApolloFetch } from 'apollo-fetch'
// import jsonwebtoken from 'jsonwebtoken'
import settings from 'config/settings'
import { createJwt } from "api/services/jwt"
// import jsonwebtoken from 'jsonwebtoken'

const uri = `http://localhost:${settings.port}/v1`
const apolloFetch = createApolloFetch({ uri })


// const createJwtTest = () => {
//   return jsonwebtoken.sign(
//     {
//       user_id: 1,
//       email: "test@test.com",
//     },
//     settings.jwt_secret_key,
//     {
//       expiresIn: 10000000000
//     }
//   )
// }



export const graphqlQuery = (query, variables, user) => {

  if (user) {
    // console.log(user)

    // const middleware = ({ request }, next) => {
    //   if (!request.options.headers) {
    //     request.options.headers = {}
    //   }
    //   request.options.headers.authorization = `Token ${createJwt(user)}`
    //   next()
    // }

    // const middleware = ({ req }, next) => {

    //   if (!req.options.headers) {
    //     req.options.headers = {}
    //   }
    //   req.options.headers.authorization = `Token ${createJwt(user)}`
    //   next()
    // }

    // apolloFetch.use(middleware)

    apolloFetch.use(({ request, options }, next) => {
      if (!options.headers) {
        options.headers = {}
      }
      options.headers['authorization'] = `Token ${createJwt(user)}`

      next()
    })

  }

  return apolloFetch({ query, variables })
}

