import express from 'express'
import bunyan from 'bunyan'
import routes from 'config/routes'
import settings from 'config/settings'

import bodyParser from 'body-parser'
import cors from 'cors'
import AccessLogger from 'api/middlewares/access_logger'

const app = express()

const logger = bunyan.createLogger({
  name: 'app',
  src: true,
  level: 'trace',
})

app.use((req, res, next) => {
  if (settings.env != "test") {
    req.log = logger
  }
  next()
})

app.use(cors())
app.use(bodyParser.json())
app.use(AccessLogger())
routes(app)

export const listen = async (app) => {
  if (settings.env != "test") {
    logger.info(`App ${settings.name} running on port ${settings.port}`)
  }
  return app.listen(settings.port)
}

export default app
