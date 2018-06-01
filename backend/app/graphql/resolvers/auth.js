import { User } from "app/models"
import { createJwt } from "app/services/jwt"
import { authenticated } from "app/services/graphql"

export const createToken = async (_, args) => {
  const { email, password } = args.input

  const user = await User.findOne({ where: { email } })

  if (!user) {
    throw new Error("user not found")
  }

  if (!await user.comparePassword(password)) {
    throw new Error("wrong password")
  }

  const token = await createJwt(user)

  return {
    user,
    token,
  }
}
