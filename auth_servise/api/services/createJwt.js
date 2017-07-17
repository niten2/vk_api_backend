import settings from 'config/settings'
import jwt from 'jsonwebtoken'

export const createJwt = (user) => {

  return jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    settings.jwt_secret_key
  )

}
