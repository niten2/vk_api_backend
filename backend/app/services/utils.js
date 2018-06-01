import { User } from "app/models"
import { verifyJwt } from "app/services/jwt"

export const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
export const getRandomArbitrary = (min, max) => Math.random() * (max - min) + min
export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min
export const minutesToMilliseconds = (minutes) => minutes * 60 * 1000

export const getTokenFromHeader = (req) => {
  if (!req.header('Authorization') || !req.header('authorization')) {
    return null
  }

  let jwtString = req.header('Authorization') || req.header('authorization')

  if (jwtString) {
    const parts = jwtString.split(' ')
    const token = parts[1]

    return token
  }

  return null
}

export const getTokenFromString = (value) => {
  if (!value) throw new Error("string should be exist")

  return value.split(" ")[1]
}

export const authenticateOnConnect = async (connectionParams, webSocket) => {
  let payload
  const { Authorization } = connectionParams

  const token = getTokenFromString(Authorization)

  if (!token) throw new Error("access denied: jwt token not found")

  try {
    payload = await verifyJwt(token)
  } catch (err){
    throw new Error("access denied: jwt token not valid")
  }

  const user = await User.findById(payload.user_id)

  if (!user) throw new Error("access denied: user not found")

  return { user }
}
