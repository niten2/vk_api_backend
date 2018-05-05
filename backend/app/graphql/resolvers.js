import { User, Client, Loan, Territory } from "app/models"
import { createJwt } from "app/services/jwt"
import { authenticated } from "app/services/graphql"

const Query = {
  // users: authenticated(async (root: any, args: any, ctx: any) => {
  //   ctx.ability.throwUnlessCan('read', User)

  //   let options: any = { _id: { $ne: ctx.user.id } }

  //   if (args.input && args.input.role) {
  //     options.role = args.input.role
  //   }

  //   const users = await User.find(options)

  //   return users
  // }),

  // user: authenticated(async (root: any, args: any, ctx: any) => {
  //   ctx.ability.throwUnlessCan('read', ctx.user)

  //   const user = await User.findById(args.id)
  //   return user
  // }),

  me: authenticated(async (root, args, ctx) => {
    console.log(1111)

    if (!ctx.user) throw new Error("user not found")

    const user = await User.findById(ctx.user.id)
    return user
  }),

}

const Mutation = {

  createUser: authenticated(async (root, args, ctx) => {
    ctx.ability.throwUnlessCan('create', User)

    const user = await User.create(args.input)
    return user
  }),

  updateMe: authenticated(async (root, args, ctx) => {
    const user = ctx.user

    await user.set(args.input)
    await user.save()

    return user
  }),

  createToken: async (_, args) => {
    const { login, password } = args.input

    const user = await User.findOne({ login })

    if (!user) {
      throw new Error("user not found")
    }

    if (user.blocked) {
      throw new Error("user blocked, connect with admin")
    }

    if (!await user.comparePassword(password)) {
      await user.addAttempt()
      throw new Error("wrong password")
    }

    const token = await createJwt(user)

    await user.resetAttempt()

    return {
      user,
      token,
    }
  },


}

export default { Query, Mutation }
