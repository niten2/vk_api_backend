import express from 'express'
import initRoutes from 'config/routes'
import bunyan from 'bunyan'
import settings from 'config/settings'

import AccessLogger from 'api/middlewares/access_logger'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()

const logger = bunyan.createLogger({
  name: 'app',
  src: true,
  level: 'trace',
})

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
