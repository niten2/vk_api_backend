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


    // console.log(111)
    await app.listen(settings.port)

    startSubscriptionServer(app)
    // console.log(111)

    // var server = await app.listen(settings.port, function() {
    //   console.log('Express server listening on port ' + server.address().port);
    // });


    // await app.listen(settings.port, () => {
    //   console.log(8888)

    //   // startSubscriptionServer(app)
    // })

    logger.info(`App ${settings.name}, running on port ${settings.port}, NODE_ENV ${settings.env}`)
  } catch (err) {
    logger.error(err.message)
  }
}
