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
    await User.destroy({where: {}, truncate: true})
    server = await listen(app)
    user = await User.create(user_fixtures)
  })

  after(async () => {
    await server.close()
  })


  it('query users', async () => {
    const query = `
      mutation updateUser($input: UserInput!) {
        updateUser(input: $input) {
          id
          name
          email
          __typename
        }
      }
    `

    const variables = {
      input: {
        name: "test",
        email: "test@test.com",
      }
    }

    let response = await graphqlQuery(query, variables, user)

    expect(response).to.deep.include({
      data: {
        updateUser: {
          id: user.id.toString(),
          name: variables.input.name,
          email: variables.input.email,
          __typename: "User",
        }
      }
    })

  })
})
