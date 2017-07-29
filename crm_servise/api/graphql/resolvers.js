import { verifyJwt } from 'api/services/jwt'

const errorJwt = (message) => {
  return {
    data: { token: null },
    errors: [{
      message: message || 'Format for Authorization: Bearer [token]'
    }]
  }
}

export default (params) => ([
  (req, res, next) => {
    let token;

    if (req.header('Authorization') || req.header('authorization')) {

      const parts = req.header('Authorization').split(' ');

      if (parts.length === 2) {
        const scheme = parts[0];
        const credentials = parts[1];

        if (/^Bearer$/.test(scheme) && credentials !== "null") {
          token = credentials;
        } else {
          return res.status(401).json(
            errorJwt('Format for Authorization: Bearer [token]')
          )
        }
      } else {
        return res.status(401).json(
          errorJwt('Format for Authorization: Bearer [token]')
        )
      }

    } else if (req.body.token) {
      token = req.body.token
      delete req.query.token

    } else {
      return res.status(401).json(
        errorJwt('Format for Authorization: Bearer [token]')
      )
    }

    return verifyJwt(token, async (err, payload) => {
      if (err) return res.status(401).json(errorJwt(err.message))
      req.payload = payload
      return next()
    })
  }
])
