import { createServer } from 'http'
import { execute, subscribe } from 'graphql'
import { SubscriptionServer } from 'subscriptions-transport-ws'
import settings from 'config/settings'
import schema from './schema'

import pubsub from "app/graphql/pubsub"

const PORT = 5000


const SOMETHING_CHANGED_TOPIC = 'something_changed'


export default (server) => {

const ws = createServer(server);
ws.listen(PORT, () => {
  console.log(`GraphQL Server is now running on http://localhost:${PORT}`);

  // Set up the WebSocket for handling GraphQL subscriptions.
  new SubscriptionServer({
    execute,
    subscribe,
    schema
  }, {
    server: ws,
    path: '/subscriptions',
  });
});




//   // if (settings.isEnvTest) return

//   // const ws = createServer(server)

//   const ws = createServer((req, res) => {
//     console.log("888888888888, connect to ws")

//     res.writeHead(404)
//     res.end()
//   })

//   let server = ws.listen(WS_PORT, () => {
//   //   if (!settings.isEnvTest) {
//   //     console.log(`GraphQL subscription server is now running on ws://localhost:${WS_PORT}/subscriptions`)
//   //   }

//   //   try {
//       let z = new SubscriptionServer({
//         execute,
//         subscribe,
//         schema
//       }, {
//         server: server,
//         path: '/subscriptions',
//       })
//     // } catch (err) {

//     // }

//   })



//     pubsub.publish(SOMETHING_CHANGED_TOPIC, { subscribeToLog: { id: "1239999999999" } })

}
