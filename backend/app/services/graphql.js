import { User } from "app/models"
import { verifyJwt } from "app/services/jwt"

export const authenticated = (fn) => async (parent, args, ctx, info) => {
  let { token } = ctx

  if (!token) throw new Error("access denied: jwt token not found")

  let payload

  try {
    payload = await verifyJwt(token)
  } catch (err){
    throw new Error("access denied: jwt token not valid")
  }

  const user = await User.findById(payload.user_id)

  if (!user) throw new Error("access denied: user not found")

  ctx.user = user

  return fn(parent, args, ctx, info)
}
