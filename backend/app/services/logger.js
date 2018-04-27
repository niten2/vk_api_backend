import settings from 'config/settings'
import bunyan from 'bunyan'

// TODO change for tests
const buildLogger = () => {
  console.log(process.cwd() + `log/${settings.env}.log`)

  // if (settings.isEnvTest) {
  //   return {
  //     info: () => {},
  //     error: () => {},
  //   }
  // }

  return bunyan.createLogger({
    name: "logger",
    level: 'trace',
    serializers: {
      req: bunyan.stdSerializers.req,
      res: bunyan.stdSerializers.res
    },
    streams: [{
        path: process.cwd() + `log/${settings.env}.log`,
    }]
  })
}

export default buildLogger()
