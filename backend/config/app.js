import initRoutes from "config/routes"
import initMiddlewares from "app/middlewares"
import settings from "config/settings"
import logger from "app/services/logger"

export const initApp = async (app) => {
  await initMiddlewares(app)
  await initRoutes(app)
}

export const listen = async (app) => {
  try {
    await initApp(app)
    await app.listen(settings.port)

    logger.info(`App ${settings.name}, running on port ${settings.port}, NODE_ENV ${settings.env}`)
  } catch (err) {
    logger.error(err.message)
  }
}
