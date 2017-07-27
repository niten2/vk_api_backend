import jsonwebtoken from 'jsonwebtoken'
import settings from 'config/settings'

export const createJwt = (user) => {
  return jsonwebtoken.sign(
    {
      id: user.id,
      email: user.email,
    },
    settings.jwt_secret_key,
    {
      expiresIn: 10800
    }
  )
}

export const verifyJwt = (token, cb) => {
  return jsonwebtoken.verify(
    token,
    settings.jwt_secret_key,
    {},
    cb
  )
}
