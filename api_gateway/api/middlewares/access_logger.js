const levelFn = (data) => {
  if (data.err || data.status >= 500 || data.duration > 10000) {
    return 'error'
  } else if (data.status >= 400 || data.duration > 3000) {
    return 'warn'
  }
  return 'info'
}

const logFinish = (data) => {
  const time = (data.duration || 0).toFixed(3)
  const length = data.length || 0
  return `${data.method} ${data.url} ${data.status} ${time}ms ${length} b`
}


export default (params) => ([
  (req, res, next) => {
    if (req.log) {
      const data = {}

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

      const hrtime = process.hrtime()

      function logging() {
        data.status = res.statusCode
        data.length = res.getHeader('Content-Length')

        const diff = process.hrtime(hrtime)
        data.duration = diff[0] * 1e3 + diff[1] * 1e-6

        log[levelFn(data)](logFinish(data))
        log.debug("REQ BODY", req.body)
      }

      res.on('finish', logging)
    }
    next()
  }
])
