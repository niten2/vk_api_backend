import { createServer } from 'http'
import { execute, subscribe } from 'graphql'
import { SubscriptionServer } from 'subscriptions-transport-ws'
import settings from 'config/settings'
import schema from './schema'
import logger from 'app/services/logger'

export default (server) => {
  const ws = createServer(server)

  ws.listen(settings.ws_port, () => {
    logger.info(`GraphQL subscription server is now running on port ${settings.ws_port}`)

    new SubscriptionServer({
      execute,
      subscribe,
      schema
    }, {
      server: ws,
      path: '/v1/subscriptions',
    })
  })
}
