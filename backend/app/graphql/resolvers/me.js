import moment from "moment"
import Sequelize, { Op } from "sequelize"
import { merge, path, prop, last } from "ramda"
import { User, VkPerson, Setting } from "app/models"
import { createJwt } from "app/services/jwt"
import { authenticated } from "app/services/graphql"

export const me = authenticated(async (root, args, ctx) => {
  const user = await User.findById(ctx.user.id)


  return user
})


export const updateMe = authenticated(async (root, args, ctx) => {
  const { user } = ctx

  await user.set(args.input)
  await user.save()

  return user
})
