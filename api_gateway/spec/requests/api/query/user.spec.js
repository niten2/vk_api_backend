import { expect } from 'chai'
import request from 'supertest'
import { User } from "api/models"
import { graphqlQuery } from 'spec/support'
import { user_fixtures } from "spec/support/fixtures"
import app, { listen } from "config/app"

describe('api query', () => {
  let server
  let user

  before(async () => {
    await User.destroy({where: {}, truncate: true})
    server = await listen(app)
    user = await User.create(user_fixtures)
  })

  after(async () => {
    await server.close()
  })

  describe('with token', () => {
    it('query user', async () => {
      const query = `
        query user {
          user {
            name
            email
          }
        }
      `
      let response = await graphqlQuery({ query, user })

      expect(response).to.deep.include({
        data: {
          user: {
            name: user_fixtures.name,
            email: user_fixtures.email,
          }
        }
      })
    })
  })

  describe('without token', () => {
    it('query user', async () => {
      const query = `
        query user {
          user {
            name
            email
          }
        }
      `
      let response = await graphqlQuery({ query })

      expect(response).to.deep.include({
        errors: [{
          message: "User is not authenticated",
        }]
      })
    })
  })

})
