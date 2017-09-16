import chai, { expect } from 'chai'
import schema from 'api/graphql/schema'
import { User, Setting } from "api/models"
import { user_fixtures, setting_fixtures } from "spec/fixtures"
import { createJwt } from "api/services/jwt"

const query = schema._typeMap.Query.getFields()

describe('query settings', () => {
  beforeEach(async () => {
    await User.destroy({where: {}, truncate: true})
    await Setting.destroy({where: {}, truncate: true})
  })

  let settings, context

  beforeEach(async () => {
    await Setting.create(setting_fixtures)
    context = { payload: { user_id: 1 } }
  })

  it("with payload", async () => {
    let settings = await query.settings.resolve(null, {}, context)
    expect(settings).to.be.an('array').lengthOf(1)
    expect(settings[0].name).to.have.eq(setting_fixtures.name)
    expect(settings[0].value).to.have.eq(setting_fixtures.value)
  })

  it("without payload", async () => {
    expect(() => query.settings(null, {}, {})).to.throw(Error)
  })
})
