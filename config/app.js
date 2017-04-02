import bunyan from 'bunyan'
import express from 'express'
import mongoose from 'mongoose'
import path from 'path'
import settings from 'config/settings'
import middlewares from 'api/middlewares'
import models from 'api/models'
import resourses from 'api/resourses'
import routes from 'config/routes'

export default class App {

  constructor(params = {}) {
    if (settings.env != "test" && !this.log) {
      this.log = this.getLogger()
    }
    Object.assign(this, params)

    this.app = express()
    this.settings = settings
    this.models = models

    this.initMiddlewares()
    this.initResourses()
    this.initRoutes()

    // this.initPassportStrategy()
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
    if (this.middlewares) {
      this.log.trace('middlewares', Object.keys(this.middlewares))
    }
    if (this.models) {
      this.log.trace('models', Object.keys(this.models))
    }
    if (this.resourses) {
      this.log.trace('resourses', Object.keys(this.resourses))
    }

    this.log.info(`App ${this.settings.name} running on port ${this.settings.port}`)
  }

  initMiddlewares() {
    this.middlewares = middlewares(this)
    this.app.use(this.middlewares.reqParser)
    this.app.use(this.middlewares.passport)
    this.app.use(this.middlewares.reqLog)
    this.app.use(this.middlewares.accessLogger)
    // this.app.use(favicon(__dirname + '/public/favicon.ico'))
    // this.app.use(express.static(path.join(__dirname, 'public')))
  }

  getLogger(params) {
    return bunyan.createLogger(Object.assign({
      name: 'app',
      src: true,
      level: 'trace',
    }, params))
  }

  initRoutes() {
    this.app.use('/', routes(this))

    // catch 404 and forward to error handler
    this.app.use((req, res, next) => {
      var err = new Error('Not Found')
      err.status = 404
      next(err)
    })

    // development error handler will print stacktrace
    if (settings.env == 'development') {
      this.app.use((err, req, res, next) => {
        res.status(err.status || 500)
        res.json({"error": err.message})
      })
    }

    // production error handler no stacktraces leaked to user
    this.app.use((err, req, res, next) => {
      res.status(err.status || 500)
      res.render('error', {
        message: err.message,
        error: err,
      })
    })
  }

  initResourses() {
    this.resourses = resourses(this)
  }

  this() {
    return this
  }

  // initPassportStrategy() {
  //   this.passport = passportStrategy(this)()
  // }

  // initModels() {
  // }

  // getDatabase() {
  //   return {
  //     run: () => {
  //       new Promise((resolve) => {
  //         mongoose.Promise = Promise
  //         mongoose.connect(this.config.db.url)
  //         resolve()
  //       })
  //     }
  //   }
  // }

  // getDatabase() {
  //   return {
  //     run: () => {
  //       new Promise((resolve) => {
  //         mongoose.Promise = Promise
  //         mongoose.connect(this.config.db.url)
  //         resolve()
  //       })
  //     }
  //   }
  // }

}
