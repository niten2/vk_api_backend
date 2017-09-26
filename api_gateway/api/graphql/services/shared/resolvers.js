import { Setting, User } from "api/models"
import { redirectVk, redirectCrm } from "api/services/fetch"
import { lensProp, set, pipe, assocPath, merge, reduce } from "ramda"

export const SharedQuery = {
  meta: async (_, args, context) => {
    const { name } = args.input
    let count

    const AuthModels = {
      "Setting": Setting,
      "User": User,
    }

    const CrmModels = [
      "Client",
      "Status",
    ]

    const VkModels = [
      "Person",
      "Tag",
      "Group",
    ]

    const model = AuthModels[name]

    if (model) {
      count = await model.count()
    }

    if (CrmModels.includes(name)) {
      let response = await redirectCrm(context)
      count = response.data.meta.count
    }

    if (VkModels.includes(name)) {
      const response = await redirectVk(context)
      count = response.data.meta.count
    }

    if (count != 0 && !count) { throw new Error("name model not found") }

    return { count: count }
  },
}
