import jwt from './jwt'
import reqLog from './reqLog'
import reqParser from './reqParser'
import accessLogger from './accessLogger'
import passport from './passport'

export default function () {
  return {
    jwt: jwt,
    passport: passport(...arguments),
    reqLog: reqLog(...arguments),
    reqParser: reqParser(...arguments),
    accessLogger: accessLogger(...arguments),
    // accessLogger: require('./accessLogger')(),
  }
}
