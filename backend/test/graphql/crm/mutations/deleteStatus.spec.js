import { expect } from 'chai'
import schema from 'api/graphql/schema'
import settings from "config/settings"
import nock from "nock"

const deleteStatus = schema._typeMap.Mutation.getFields().deleteStatus.resolve

describe('spec/schema/crm/mutations/deleteStatus.spec.js', () => {

  it("with payload", async () => {
    let context = {
      body: {
        query: "test"
      },
      user_id: 4
    }

    let data = {
      data: {
        status: { status: "status" }
      }
    }

    nock(settings.crmUri, {
      reqheaders: {
        'user_id': `${context.user_id}`,
      }
    }).post(
      "",
      context.body
    ).reply(201, data)

    const response = await deleteStatus(null, {}, context)

    expect(response).to.include(data.data.status)
  })

})
