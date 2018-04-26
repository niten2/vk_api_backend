import express from 'express'
import bunyan from 'bunyan'
import initRoutes from 'config/routes'
import settings from 'config/settings'
import bodyParser from 'body-parser'
import cors from 'cors'
import AccessLogger from 'api/middlewares/access_logger'
import logger from 'api/services/logger'

const app = express()

app.use((req, res, next) => {
  if (!settings.isEnvTest) {
    req.log = logger
  }
  next()
})

app.use(cors())
app.use(bodyParser.json())
app.use(AccessLogger())

initRoutes(app)

export const listen = async (app) => {
  if (!settings.isEnvTest) {
    logger.info(`App ${settings.name} running on port ${settings.port}`)
  }
  return app.listen(settings.port)
}

export default app
