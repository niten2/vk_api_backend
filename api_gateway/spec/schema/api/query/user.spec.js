import chai, { expect } from 'chai'
import schema from 'api/graphql/schema'
import { User, Setting } from "api/models"
import { user_fixtures, setting_fixtures } from "spec/fixtures"
import { createJwt } from "api/services/jwt"

let query = schema._typeMap.Query.getFields()

describe('query user', () => {
  beforeEach(async () => {
    await User.destroy({where: {}, truncate: true})
    await Setting.destroy({where: {}, truncate: true})
  })

  let user, context

  beforeEach(async () => {
    user = await User.create(user_fixtures)
    context = { payload: { user_id: user.id } }
  })

  it("with payload", async () => {
    let user = await query.user.resolve(null, null, context)
    expect(user.name).to.eq(user_fixtures.name)
    expect(user.email).to.eq(user_fixtures.email)
  })

  it("without payload", async () => {
    expect(() => ApiQuery.user(null, null, {})).to.throw(Error)
  })
})
