import jwt from './jwt'
import reqLog from './reqLog'
import reqParser from './reqParser'
import accessLogger from './accessLogger'
import passport from './passport'

export default (context) => {
  context.app.use(reqParser(context))
  context.app.use(passport(context))
  context.app.use(reqLog(context))
  context.app.use(accessLogger(context))
}
