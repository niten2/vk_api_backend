require('dotenv').config()

import bunyan from 'bunyan'
import express from 'express'
import mongoose from 'mongoose'
// import favicon from 'serve-favicon'
import path from 'path'

import config from './config'
import middlewares from './middlewares'
import models from './models'
import resourses from './resourses'
import api from './api'
import passportStrategy from 'lib/passport_strategy'


export default class App {

  constructor(params = {}) {
    if (process.env.NODE_ENV != "test" && !this.log) {
      this.log = this.getLogger()
    }
    Object.assign(this, params)
    this.init()
  }

  init() {
    this.app = express()
    this.config = config
    this.models = models
    this.initMiddlewares()
    this.initResourses()
    this.initRoutes()

    // this.initPassportStrategy()
    if (process.env.NODE_ENV != "test") {
      this.initLogSetup()
    }
  }

  async run() {
    if (process.env.NODE_ENV != "test") {
      // try {
      //   await this.db.run()
      // } catch (err) {
      //   this.log.fatal(err)
      // }
      return new Promise((resolve) => {
        this.app.listen(this.config.port, () => {
          resolve(this)
        })
      })
    } else {
      await this.db.run()
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

    this.log.info(`App ${this.config.name} running on port ${this.config.port}`)
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

  initResourses() {
    this.resourses = resourses(this)
  }

  getLogger(params) {
    return bunyan.createLogger(Object.assign({
      name: 'app',
      src: true,
      level: 'trace',
    }, params))
  }

  getDatabase() {
    return {
      run: () => {
        new Promise((resolve) => {
          mongoose.Promise = Promise
          mongoose.connect(this.config.db.url)
          resolve()
        })
      }
    }
  }

  initRoutes() {
    this.app.use('/', api(this))

    this.app.use((req, res, next) => {
      var err = new Error('Not Found')
      err.status = 404
      next(err)
    })

    // catch 404 and forward to error handler
    this.app.use((req, res, next) => {
      var err = new Error('Not Found')
      err.status = 404
      next(err)
    })

    // development error handler will print stacktrace
    if (this.app.get('env') === 'development') {
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
        error: err
      })
    })
  }

  this() {
    return this
  }

  // initPassportStrategy() {
  //   this.passport = passportStrategy(this)()
  // }

  // initModels() {
  // }
}

