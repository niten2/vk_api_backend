// import leftPad from 'left-pad'

function levelFn(data) {
  if (data.err || data.status >= 500 || data.duration > 10000) {
    // server internal error or error
    return 'error'
  } else if (data.status >= 400 || data.duration > 3000) {
    // client error
    return 'warn'
  }
  return 'info'
}

// function logStart(data) {
//   return `${leftPad(data.method, 4)} ${data.url} started reqId=${data.reqId}`
// }

function logFinish(data) {
  const time = (data.duration || 0).toFixed(3)
  const length = data.length || 0
  // return `${leftPad(data.method, 4)} ${data.url} ${leftPad(data.status, 3)} ${leftPad(time, 7)}ms ${leftPad(length, 5)}b reqId=${data.reqId}`
  // return `${leftPad(data.method, 4)} ${data.url} ${leftPad(data.status, 3)} ${leftPad(time, 7)}ms ${leftPad(length, 5)}b`
  return `${data.method} ${data.url} ${data.status} ${time}ms ${length} b`
}

// export default ([
export default (params) => ([
  (req, res, next) => {
    if (req.log) {
      const data = {}
      // if (!req.log) throw 'has no req.log!'

      const log = req.log.child({
        component: 'req',
      })

      data.reqId = req.reqId

      if (req.ws) {
        data.method = 'WS'
      } else {
        data.method = req.method
      }

      data.url = (req.baseUrl || '') + (req.url || '-')
      data.referer = req.header('referer') || req.header('referrer')
      data.host = req.headers.host
      data.ip = req.ip ||
        req.connection.remoteAddress ||
        (req.socket && req.socket.remoteAddress) ||
        (req.socket.socket && req.socket.socket.remoteAddress) ||
        '127.0.0.1'


      // if (__DEV__) {
      //   log.debug(data, logStart(data))
      //   if (req.body) { log.trace(JSON.stringify(req.body)) }
      // }

      const hrtime = process.hrtime()

      function logging() {
        data.status = res.statusCode
        data.length = res.getHeader('Content-Length')

        const diff = process.hrtime(hrtime)
        data.duration = diff[0] * 1e3 + diff[1] * 1e-6

        log[levelFn(data)](logFinish(data))

        // log[levelFn(data)](data, logFinish(data))
      }

      if (req.body) {
        log.debug(req.body)
      }

      res.on('finish', logging)
      // res.on('close', logging)
    }
    next()
  }
])
