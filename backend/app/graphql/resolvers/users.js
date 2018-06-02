import { User } from "app/models"
import { createJwt } from "app/services/jwt"

export const createUser = async (root, args, ctx) => {
  const user = await User.create(args.input)
  const token = await createJwt(user)

  return {
    token,
    user
  }
}
