import settings from 'config/settings'
import bunyan from 'bunyan'

const getStreams = () => {
  if (settings.isEnvTest) return []

  return [
    {
      level: 'trace',
      stream: process.stdout
    },
    {
      path: process.cwd() + `/log/${settings.env}.log`,
    },
  ]
}

const buildLogger = () => {
  return bunyan.createLogger({

    name: settings.env,
    level: 'trace',

    serializers: {
      req: bunyan.stdSerializers.req,
      res: bunyan.stdSerializers.res
    },

    streams: getStreams(),
  })
}

export default buildLogger()
