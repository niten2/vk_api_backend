import pubsub from "app/graphql/pubsub"
import { authenticated } from "app/services/graphql"
// import { Log } from "app/models"

export const logs = authenticated(async (root, args, ctx) => {


  return { }
  // return logs
})

export const testLog = authenticated(async (root, args, ctx) => {

  console.log("testLog")

  // pubsub.publish(SOMETHING_CHANGED_TOPIC, { subscribeToLog: { id: "1239999999999", name: "4444name" } })

  // setInterval(() => {
  //   console.log("send")
  //   pubsub.publish('something_changed', { subscribeToLog: { id: "1239999999999", name: "4444name" } })
  // }, 1000)


  return { message: "ok" }
})

// export const subscribeToLog = {
//   subscribe: () => pubsub.asyncIterator(SOMETHING_CHANGED_TOPIC)
// }
