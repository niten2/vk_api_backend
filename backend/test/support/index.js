import express from 'express'
import factory from "test/factory"
import execGraphql from "test/support/exec_grapql"
import matchers from "test/support/matchers"
import { initApp } from "config/app"
import { dropDb } from 'db/sequelize'

global.factory = factory
global.app = express()
global.execGraphql = execGraphql
global.matchers = matchers

jest.setTimeout(10000)

beforeAll(async () => { await initApp(app) })
afterEach(async () => { await dropDb() })
