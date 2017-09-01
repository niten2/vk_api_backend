import express from 'express'
import bunyan from 'bunyan'
import routes from 'config/routes'
import settings from 'config/settings'

export default class App {

  constructor(params = {}) {
    if (settings.env != "test" && !this.log) {
      this.log = this.getLogger()
    }

    Object.assign(this, params)

    this.app = express()
    routes(this.app)

    if (settings.env != "test") {
      this.initLogSetup()
    }

  }

  async run() {
    if (settings.env == "development") {
      return new Promise((resolve) => {
        this.app.listen(settings.port, () => {
          resolve(this)
        })
      })
    }
  }

  initLogSetup() {
    this.log.info(`App ${settings.name} running on port ${settings.port}`)
  }

  getLogger(params) {
    return bunyan.createLogger(Object.assign({
      name: 'app',
      src: true,
      level: 'trace',
    }, params))
  }

  this() {
    return this
  }

}
