import jwt from 'jsonwebtoken'

export default function isAuthenticated(req, res, next) {
  var token = req.body.token || req.query.token || req.headers['token'];

  if (token) {
    jwt.verify(token, 'secret', function(err, decoded) {
      if (err) {
        return res.status(401).send({
          success: false,
          error: 'Failed to authenticate token or expiried at overdue'
        })
      } else {
        req.decoded = decoded
        next()
      }
    })

  } else {

    return res.status(401).send({
      success: false,
      error: 'No token provided.'
    })

  }
}

// import jwt from 'express-jwt'

// export function canonize(str) {
//   return str.toLowerCase().trim()
// }

// export default (ctx) => {
//   const User = ctx.models.User
//   const resourse = {}

//   resourse.validate = async function (req) {
//     const user = await User.findById(req.user._id)
//     if (!user) return res.status(404).send('Не найден user в базе')
//     return {
//       __pack: 1,
//       jwt: req.user,
//       user: user,
//     }
//   }


//   resourse.getUserFields = function (req) {
//     return req.body
//   }
//   resourse.getUserCriteria = function (req, res) {
//     const params = req.body
//     if (params.username) {
//       return {
//         username: canonize(params.username),
//       }
//     }
//     return res.status(400).send('Параметр username, email, login не передан')
//   }
//   resourse.signup = async function (req, res) {
//     try {
//       const userFields = resourse.getUserFields(req, res)
//       const criteria = resourse.getUserCriteria(req, res)
//       const existUser = await User.findOne(criteria)
//       if (existUser) return res.status(400).send('Username with this email or username is registered')
//       const user = new User(userFields)
//       await user.save()
//       return res.json({
//         signup: true,
//         user,
//         token: user.generateAuthToken(),
//       })

//     }catch(err) {
//       console.log(err);
//       return res.status(500).json(err)
//     }
//   }

//   resourse.login = async function (req, res) {
//     const params = resourse.getUserFields(req, res)
//     if (!params.password) return res.status(400).send('Параметр password не передан')

//     const criteria = resourse.getUserCriteria(req)
//     const user = await User.findOne(criteria)

//     if (!user) return res.status(404).send('Такой пользователь не найден')

//     if (!await user.verifyPassword(params.password)) {
//       return res.status(400).send('Переданный пароль не подходит')
//     }

//     return res.json({
//       __pack: 1,
//       user,
//       token: user.generateAuthToken(),
//     })
//   }

//   resourse.getToken = function (req) {
//     if (req.headers.authorization && req.headers.authorization.split( ' ' )[ 0 ] === 'Bearer') {
//       return req.headers.authorization.split( ' ' )[ 1 ]
//     } else if (req.headers['x-access-token']) {
//       return req.headers['x-access-token'];
//     } else if ( req.query && req.query.token ) {
//       return req.query.token
//     } else if ( req.cookies && req.cookies.token  ) {
//       return req.cookies.token
//     }
//     if (__DEV__ && ctx.config && ctx.config.jwt && ctx.config.jwt.devToken) return ctx.config.jwt.devToken
//     return null;
//   }

//   resourse.parseToken = function (req, res, next) {
//     const token = resourse.getToken(req)
//     req.token = token
//     next()
//   }

//   resourse.parseUser = function (req, res, next) {
//     const options = {
//       secret: ctx.config && ctx.config.jwt.secret || 'SECRET',
//       getToken: req => req.token,
//     }
//     jwt(options)(req, res, (err) => {
//       if (err) req._errJwt = err
//       next()
//     })
//   }

//   resourse.isAuth = function (req, res, next) {
//     if (req._errJwt) return next(req._errJwt)
//     if (!req.user || !req.user._id) return res.status(401).send('!req.user')
//     next()
//   }

//   return resourse
// }
