import chai, { expect } from 'chai'
import request from 'supertest'
import { User, Setting } from "api/models"
import { graphqlQuery } from 'spec/support/helper'
import { user_fixtures } from "spec/support/fixtures"
import app, { listen } from "config/app"

describe('api mutations', () => {
  let server
  let user

  before(async () => {
    server = await listen(app)
    user = await User.create(user_fixtures)
  })

  after(async () => {
    await server.close()
  })

  beforeEach(async () => {
    await User.destroy({where: {}, truncate: true})
  })

  it('query users', async () => {
    const query = `
      mutation updateUser($input: UserInput!) {
        updateUser(input: $input) {
          id
          __typename
        }
      }
    `

    const variables = {
      input: {
        name: "test"
      }
    }

    let response = await graphqlQuery(query, variables, user)

    console.log(response)
    // expect(response).to.deep.include({ data: {users: []}})
  })
})
