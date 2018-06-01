import pubsub, { TEST_TOPIC } from "app/graphql/pubsub"
import { authenticated } from "app/services/graphql"
import { withFilter } from 'graphql-subscriptions'

export const logs = authenticated(async (root, args, ctx) => {
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
})

export const testLog = authenticated(async (root, args, ctx) => {
  pubsub.publish(TEST_TOPIC, { subscribeToLog: { id: "1239999999999", name: "4444name" } })
  console.log("send")

  return { message: "ok" }
})

export const subscribeToLog = {
  subscribe: withFilter(() => pubsub.asyncIterator(TEST_TOPIC), (payload, args, ctx) => {
    return ctx.user.id == args.input.userId
  }),
}
