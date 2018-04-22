import { expect } from 'chai'
import app, { listen } from "config/app"
import { User, Setting } from "api/models"
import { graphqlQuery } from 'spec/support'
import { user_fixtures } from "spec/support/fixtures"

describe('requests/api/mutations/updateUser.spec.js', () => {
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


  it('should return response', async () => {
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

    let response = await graphqlQuery({ query, variables, user })

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
