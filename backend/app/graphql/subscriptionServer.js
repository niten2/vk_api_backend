import { createServer } from 'http'
import { execute, subscribe } from 'graphql'
import { SubscriptionServer } from 'subscriptions-transport-ws'
import settings from 'config/settings'
import schema from './schema'
import logger from 'app/services/logger'

export default (server) => {
  // const ws = createServer(server)

  // console.log(ws)

  // ws.listen(settings.ws_port, () => {
  //   logger.info(`GraphQL subscription server is now running on port ${settings.ws_port}`)

  //   new SubscriptionServer({
  //     execute,
  //     subscribe,
  //     schema
  //   }, {
  //     server: ws,
  //     path: '/v1/subscriptions',
  //   })
  // })

  // ws.close()

  if (module.hot) {
    console.log(11111111111111)


      // module.hot.accept('./_subscriptionServer', () => {
      //     try {
      //         websocketServer.close()
      //         subscriptionServer.close()
      //         createServers()
      //         console.log('\x1b[32m', `Restarted subscription server`)
      //     } catch (err) {
      //         console.error(err)
      //     }
      // })
  }
}
