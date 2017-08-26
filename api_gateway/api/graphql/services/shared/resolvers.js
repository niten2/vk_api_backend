import { Setting, User } from "api/models"

export const SharedQuery = {
  meta: async (_, args) => {
    const { names } = args.input

    const Classes = {
      "Setting": Setting,
      "User": User,
    }

    // console.log(names)

    const count = await names.reduce (async (acc, name) => {
      const model = Classes[name]
      if (model) { acc[name] = await model.count() }
      return acc
    }, {})

    return {
      count: count
    }

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
