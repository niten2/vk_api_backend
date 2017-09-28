import schema from 'api/graphql/schema'
import { expect } from 'chai'
import settings from "config/settings"
import nock from "nock"

const persons = schema._typeMap.Query.getFields().persons

describe('spec/schema/vk/query/persons.spec.js', () => {

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

    nock(settings.vkUri, {
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

  it("without payload", async () => {
    const data = { data: { persons: { data: "data" } } }
    nock(settings.vkUri, {
      reqheaders: {}
    }).post(
      "",
      {}
    ).reply(201, data)

    let response = await persons.resolve(null, {}, {})
    expect(response).to.include(data.data.persons)
  })
})
