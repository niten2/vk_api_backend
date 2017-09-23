import { expect } from 'chai'
import schema from 'api/graphql/schema'
import settings from "config/settings"
import nock from "nock"

const persons = schema._typeMap.Query.getFields().persons

describe('query settings', () => {

  it("with payload", async () => {
    let context = {
      body: {
        query: "test"
      },
      user_id: 4
    }

    let data = {
      data: {
        persons: { person1: "person" }
      }
    }

    var scope = nock(settings.vkUri, {
      reqheaders: {
        'user_id': `${context.user_id}`,
      }
    }).post(
      "",
      context.body
    ).reply(201, data)

    const response = await persons.resolve(null, {}, context)

    expect(response).to.include(data.data.persons)
  })

  it.only("without payload", async () => {
    // let z = await persons.resolve(null, {}, {})
    // expect(() => persons.resolve(null, {}, {})).to.throw(Error)
  })
})
