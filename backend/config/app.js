import InitRoutes from "config/routes"
import InitMiddlewares from "app/middlewares"
import startSubscriptionServer from "app/graphql/subscriptionServer"
import settings from "config/settings"
import logger from "app/services/logger"

export const initApp = async (app) => {
  await InitMiddlewares(app)
  await InitRoutes(app)
}

export const listen = async (app) => {
  try {
    await initApp(app)
    await app.listen(settings.port)

    startSubscriptionServer(app)

    logger.info(`App ${settings.name}, running on port ${settings.port}, NODE_ENV ${settings.env}`)
  } catch (err) {
    logger.error(err.message)
  }
}
