import moment from "moment"
import Sequelize, { Op } from "sequelize"
import { merge, path, prop, last } from "ramda"
import { User, VkPerson, Setting } from "app/models"
import { createJwt } from "app/services/jwt"
import { authenticated } from "app/services/graphql"

import { PubSub } from 'graphql-subscriptions'

export const pubsub = new PubSub()

// export default pubsub
// import pubsub from "app/graphql/pubsub"

const SOMETHING_CHANGED_TOPIC = 'something_changed'
const CHANNEL_ADDED_TOPIC = 'newChannel';



const Query = {

  vkPersons: authenticated(async (root, args, ctx) => {
    const { user } = ctx
    const { cursor, limit = 15 } = args.input
    let query = { user_id: user.id }

    const addFriendAt = path(["input", "filter", "addFriendAt"], args)
    if (addFriendAt) {
      query = merge({
        where: {
          addFriendAt: {
            [Op.gt]: moment(addFriendAt).add(-1, 'days').toDate(),
            [Op.lt]: moment(addFriendAt).add(1, 'days').toDate(),
          }
        }
      }, query)
    }

    if (cursor) {
      query = merge({
        where: {
          id: {
            [Op.gt]: parseInt(cursor)
          }
        }
      }, query)
    }

    query.limit = limit || 15

    const vkPersons = await VkPerson.findAll(query)
    const count = await VkPerson.count({ user_id: user.id })
    const newCursor = prop("id", last(vkPersons))

    return {
      vkPersons,
      count,
      cursor: newCursor,
    }
  }),

  me: authenticated(async (root, args, ctx) => {
    const user = await User.findById(ctx.user.id)


    return user
  }),

  settings: authenticated(async (root, args, ctx) => {
    const settings = await Setting.findAll()

    return settings
  }),

  testLog: authenticated(async (root, args, ctx) => {
    console.log("testLog")

    // console.log(pubsub)

    pubsub.publish(SOMETHING_CHANGED_TOPIC, { subscribeToLog: { id: "1239999999999", name: "4444name" } })

    // pubsub.publish(CHANNEL_ADDED_TOPIC, { channelAdded: { id: "4444", name: "4449494" } });
    // pubsub.publish(SOMETHING_CHANGED_TOPIC, { id: "4444", name: "4449494" })
    // pubsub.publish(CHANNEL_ADDED_TOPIC, { id: "4444", name: "4449494" })


    return { message: "ok" }
  }),

  logs: authenticated(async (root, args, ctx) => {

    // setInterval(() => {
    //   console.log(z, SOMETHING_CHANGED_TOPIC, 111111111111111111111111)


    // }, 2000)

    // console.log(z)


    const logs = [
      {
        id: "123445",
      },
      {
        id: "123445",
      },
      {
        id: "123445",
      },
      {
        id: "123445",
      },
    ]

    return logs
  }),

}

const Mutation = {

  createUser: async (root, args, ctx) => {
    const user = await User.create(args.input)
    const token = await createJwt(user)

    return {
      token,
      user
    }
  },

  updateMe: authenticated(async (root, args, ctx) => {
    const { user } = ctx

    await user.set(args.input)
    await user.save()

    return user
  }),

  createToken: async (_, args) => {
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
  },

  createVkFriends: authenticated(async (root, args, ctx) => {
    const { user } = ctx
    let { ids } = args.input

    ids = ids.split("\n")

    let persons = []
    let errors = []

    await Promise.all(
      ids.map(async (id) => {
        try {
          let person = await VkPerson.create({ uid: id, user_id: user.id })

          persons.push(person)
        } catch (err) {
          errors.push({
            uid: id,
            message: err.message,
          })
        }
      })
    )

    return {
      persons,
      errors,
    }
  }),

}

const Subscription = {
  // subscribeToLog: {
  //   subscribe: () => pubsub.asyncIterator(SOMETHING_CHANGED_TOPIC)
  // },

  channelAdded: {  // create a channelAdded subscription resolver function.
    subscribe: () => pubsub.asyncIterator(CHANNEL_ADDED_TOPIC)  // subscribe to changes in a topic
  },


  subscribeToLog(message, variables, context, subscription) {
    console.log(`Serving subscription for user`, message, variables, context, subscription);
    return message.entry;
  }


}

// export pubsub
// export default { Query, Mutation, Subscription }
export const resolvers = { Query, Mutation, Subscription }
