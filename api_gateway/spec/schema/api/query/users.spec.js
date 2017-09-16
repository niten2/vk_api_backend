import chai, { expect } from 'chai'
import schema from 'api/graphql/schema'
import { User, Setting } from "api/models"
import { user_fixtures, setting_fixtures } from "spec/fixtures"
import { createJwt } from "api/services/jwt"

let query = schema._typeMap.Query.getFields()

describe('query users', () => {
  beforeEach(async () => {
    await User.destroy({where: {}, truncate: true})
    await Setting.destroy({where: {}, truncate: true})
  })

  beforeEach(async () => {
    await User.create(user_fixtures)
  })

  it("users", async () => {
    let users = await query.users.resolve()
    expect(users).to.be.an('array').lengthOf(1)
    expect(users[0].name).to.have.eq(user_fixtures.name)
    expect(users[0].email).to.have.eq(user_fixtures.email)
  })
})

