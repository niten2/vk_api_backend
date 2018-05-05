import { User } from "app/models"
import { verifyJwt } from "app/services/jwt"

// export const authenticated = (fn) => (parent, args, context, info) => {
//   console.log(444, context)

//   if (context.payload && context.payload.user_id) {
//     return fn(parent, args, context, info)
//   }

//   throw new Error('User is not authenticated')
// }


export const authenticated = (fn) => async (parent, args, ctx, info) => {
  let { token } = ctx

  if (!token) {
    throw new Error("token not found")
  }

  let payload

  try {
    payload = await verifyJwt(token)
  } catch (err){
    console.log("ERORR verifyJwt", err)
    throw new Error("token not valid")
  }

  const user = await User.findById(payload.user_id)

  if (!user) {
    throw new Error("user not found")
  }

  ctx.user = user
  // ctx.ability = await Policy(user)

  return fn(parent, args, ctx, info)
}

