import pubsub, { TEST_TOPIC } from "app/graphql/pubsub"
import { authenticated } from "app/services/graphql"

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
  setInterval(() => {
    console.log("send publish")
    pubsub.publish('something_changed', { subscribeToLog: { id: "1239999999999", name: "4444name" } })
  }, 10000)

  return { message: "ok" }
})

export const subscribeToLog = {
  subscribe: () => pubsub.asyncIterator(TEST_TOPIC)
}
