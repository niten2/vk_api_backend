import jsonwebtoken from 'jsonwebtoken'
import settings from 'config/settings'

export const verifyJwt = (token, cb) => {
  return jsonwebtoken.verify(
    token,
    settings.jwt_secret_key,
    {},
    cb
  )
}
