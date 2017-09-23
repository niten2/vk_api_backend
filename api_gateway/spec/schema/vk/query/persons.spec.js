import { expect } from 'chai'
import schema from 'api/graphql/schema'
// import { User, Setting } from "api/models"
// import { setting_fixtures } from "spec/support/fixtures"
// import { createJwt } from "api/services/jwt"
import settings from "config/settings"
import nock from "nock"

const persons = schema._typeMap.Query.getFields().persons

describe('query settings', () => {

  // beforeEach(async () => {
  //   await Setting.create(setting_fixtures)
  // })

  it("with payload", async () => {
    let context = { body: { query: "test"}, user_id: 4 }

    let data = {
      data: {
        persons: { }
      }
    }

    var scope = nock("http://vk_service:4003/v1", {
      reqheaders: {
        'user_id': `${context.user_id}`,
      }
    }).post(
      "",
      context.body
    ).reply(201, data)

    const response = await persons.resolve(null, {}, context)

    // console.log(response)


    // expect(settings).to.be.an('array').lengthOf(1)
    // expect(settings[0].name).to.have.eq(setting_fixtures.name)
    // expect(settings[0].value).to.have.eq(setting_fixtures.value)
  })

  // it("without payload", async () => {
  //   expect(() => query.settings(null, {}, {})).to.throw(Error)
  // })
})
