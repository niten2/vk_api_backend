import express from 'express'
import factory from "factory"
import { initApp } from "config/app"
import execGraphql from "test/support/exec_grapql"
import matchers from "test/support/matchers"
// import request from "support/request"
// import addCustomExpect from "support/custom_expect"

// addCustomExpect()


// global.request = request
global.factory = factory
global.app = express()
global.execGraphql = execGraphql
global.matchers = matchers

jest.setTimeout(10000)

// beforeAll(async () => { await connectDb() })
beforeAll(async () => { await initApp(app) })
// afterEach(async () => { await dropDb() })
// afterAll(async () => { await closeDb() })
