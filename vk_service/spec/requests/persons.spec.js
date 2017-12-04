import { expect } from 'chai'
// import { User } from "api/models"
import { graphqlQuery } from 'spec/support'
import { user_fixtures } from "spec/support/fixtures"
import app, { listen } from "config/app"

describe('api query', () => {
  let server

  before(async () => {
    server = await listen(app)
  })

  after(async () => {
    await server.close()
  })

  describe('with user_id', () => {
    it('query user', async () => {
      const query = `
        query persons {
          persons {
            id
            first_name
            uid
          }
        }
      `
      let response = await graphqlQuery({ query })

      console.log(response)
      // expect(response).to.deep.include({
      //   data: {
      //     user: {
      //       name: user_fixtures.name,
      //       email: user_fixtures.email,
      //     }
      //   }
      // })
    })
  })

  // describe('without token', () => {
  //   it('query user', async () => {
  //     const query = `
  //       query user {
  //         user {
  //           name
  //           email
  //         }
  //       }
  //     `
  //     let response = await graphqlQuery({ query })

  //     expect(response).to.deep.include({
  //       errors: [{
  //         message: "User is not authenticated",
  //       }]
  //     })
  //   })
  // })

})
