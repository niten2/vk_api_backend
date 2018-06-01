import { Setting } from "app/models"
import { authenticated } from "app/services/graphql"

export const settings = authenticated(async (root, args, ctx) => {
  const settings = await Setting.findAll()

  return settings
})
