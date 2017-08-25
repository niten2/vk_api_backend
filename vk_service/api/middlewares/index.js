import reqLog from './reqLog'
import reqParser from './reqParser'
import accessLogger from './accessLogger'

export default (context) => {
  context.app.use(reqParser(context))
  context.app.use(reqLog(context))
  context.app.use(accessLogger(context))
}
