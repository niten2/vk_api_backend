import express from 'express'
import bunyan from 'bunyan'

import settings from 'config/settings'
import middlewares from 'api/middlewares'
import models from 'api/models'
import resourses from 'api/resourses'
import routes from 'config/routes'

import schema from 'api/graphql/schema'

import { createServer } from 'http'
import { SubscriptionServer } from 'subscriptions-transport-ws'
import { execute, subscribe } from 'graphql'

export default class App {

  constructor(params = {}) {
    if (settings.env != "test" && !this.log) {
      this.log = this.getLogger()
    }
    Object.assign(this, params)

    this.app = express()
    this.settings = settings
    this.resourses = resourses(this)
    this.middlewares = middlewares(this)
    routes(this.app)

    if (settings.env != "test") {
      this.initLogSetup()
    }

  }

  async run() {

    // console.log(111)
    const server = createServer(this.app)

    // console.log(server)

    // console.log(schema)

    server.listen(settings.port, () => {
      new SubscriptionServer(
        { execute, subscribe, schema },
        { server, path: '/subscriptions' },
      )
    })

    // if (settings.env == "development") {
    //   return new Promise((resolve) => {
    //     this.app.listen(settings.port, () => {

    //       new SubscriptionServer(
    //         { execute, subscribe, schema },
    //         { server: this.app, path: '/subscriptions'},
    //       )
    //       console.log(`Hackernews GraphQL server running on port ${PORT}.`)

    //       // resolve(this)
    //     })
    //   })
    // }
  }

  initLogSetup() {
    // if (this.middlewares) {
    //   this.log.trace('middlewares', Object.keys(this.middlewares))
    // }
    // if (this.models) {
      // console.log(Object.keys(models))
      // this.log.trace('models', models)
    // }
    // if (this.resourses) {
    //   this.log.trace('resourses', Object.keys(this.resourses))
    // }
    this.log.info(`App ${this.settings.name} running on port ${this.settings.port}`)
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
