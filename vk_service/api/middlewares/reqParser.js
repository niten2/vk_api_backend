// import cookieParser from 'cookie-parser'
import cors from 'cors'
import bodyParser from 'body-parser'

export default (ctx) => ([
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true }),
  cors(),
  // cookieParser(),
])
