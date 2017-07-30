import jsonwebtoken from 'jsonwebtoken'
import settings from 'config/settings'

export const createJwt = (user) => {
  return jsonwebtoken.sign(
    {
      user_id: user.id,
      email: user.email,
    },
    settings.jwt_secret_key,
    {
      expiresIn: 10000000000
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
