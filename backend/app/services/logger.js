import bunyan from 'bunyan'

const logger = bunyan.createLogger({
  name: 'app',
  src: true,
  level: 'trace',
})

export default logger
