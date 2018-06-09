import express from 'express'
import factory from "test/factory"
import execGraphql from "test/support/exec_grapql"
import matchers from "test/support/matchers"
import { initApp } from "config/app"
import { dropDb } from 'db/sequelize'
// import { mockVk, mockDelay, mockLogger } from "test/support/mock"
import { mockVk, mockDelay } from "test/support/mock"

global.factory = factory
global.app = express()
global.execGraphql = execGraphql
global.matchers = matchers

jest.setTimeout(10000)

beforeAll(() => {
  mockVk()
  mockDelay()
  // mockLogger()
})

beforeAll(async () => { await initApp(app) })
afterEach(async () => { await dropDb() })
