import { Setting, User } from "api/models"
import { CrmFetch } from "api/services/fetch"
import { lensProp, set, pipe, assocPath, merge, reduce } from "ramda"

const queryMeta = (model) => {
  return {
    query: `
      query meta {
        meta(input: { names: ["${model}"]}) {
         count {
           ${model}
         }
        }
      }
    `
  }
}

export const SharedQuery = {
  meta: async (_, args, context) => {
    const { names } = args.input
    let count = {}

    await Promise.all(
      names.map(async (name) => {
        const AuthModels = {
          "Setting": Setting,
          "User": User,
        }

        const CrmModels = [
          "Client",
          "Status"
        ]

        const model = AuthModels[name]
        if (model) {
          count[name] = await model.count()
        }

        if (CrmModels.includes(name)) {
          let response = await CrmFetch(queryMeta(name))
          count[name] = response.data.meta.count[name]
        }

      })
    )

    return { count }
  },
}

// export const mutationApi = {

//   // public
//   createJwtToken: async (root, args) => {
//     const user = await User.findOne({
//       where: {
//         email: args.email,
//       }
//     })
//     if (user && user.password == args.password) {
//       return { token: createJwt(user) }
//     }
//   },

//   createUser: async (root, args) => {
//     const user = await User.create({
//       email: args.email,
//       password: args.password,
//     })

//     return user
//   },


//   // private
//   updateUser: async (_, args, context) => {
//     const user = await User.findById(context.payload.user_id)
//     return await user.update(args.input)
//   },

//   createSetting: async (_, args, context) => {
//     const attributes = merge(
//       args.input,
//       { user_id: context.payload.user_id }
//     )
//     return await Setting.create(attributes)
//   },

//   updateSetting: async (_, args, context) => {
//     const setting = await Setting.findById(args.id)
//     return await setting.update(args.input)
//   },

// }
