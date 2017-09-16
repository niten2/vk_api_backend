import chai, { expect } from 'chai'
import request from 'supertest'
import { User, Setting } from "api/models"
import { graphqlQuery } from 'spec/support/helper'
import { listen, close, app } from "config/app"

describe('requests', () => {

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

  describe('graphql', () => {
    let server

    before(async () => {
      server = await listen(app)
    })

    after(async () => {
      await server.close()
    })

    beforeEach(async () => {
      await User.destroy({where: {}, truncate: true})
      await Setting.destroy({where: {}, truncate: true})
    })

    it('query users', async () => {
      const query = `{
        users {
          name
          email
        }
      }`

      let response = await graphqlQuery(query)
      expect(response).to.deep.include({ data: {users: []}})
    })
  })

})
