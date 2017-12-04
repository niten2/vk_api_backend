import { expect } from 'chai'
import request from 'supertest'
import app, { listen } from "config/app"
import { User, Setting } from "api/models"
import { graphqlQuery } from 'spec/support'

describe('requests/index.spec.js', () => {

  it("GET /", async () => {
    await request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect({
        servise: "api_gateway",
        endpoint: '/v1',
      })
  })

})
