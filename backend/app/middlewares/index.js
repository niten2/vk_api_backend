import cors from 'cors'
import bodyParser from 'body-parser'
import settings from 'config/settings'

export default (app) => {
  app.use(bodyParser.json())
  app.use(cors())
}
