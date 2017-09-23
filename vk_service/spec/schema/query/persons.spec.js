import { expect } from 'chai'
import schema from 'api/graphql/schema'
import { Person } from "api/models"
import { person_fixtures } from "spec/support/fixtures"

const persons = schema._typeMap.Query.getFields().persons

describe('query persons', () => {
  let context

  beforeEach(async () => {
    await Person.destroy({where: {}, truncate: true})
  })

  beforeEach(async () => {
    await Person.create(person_fixtures)
    context = { payload: { user_id: 1 } }
  })

  it("with payload", async () => {
    let response = await persons.resolve(null, {}, context)
    expect(response).to.be.an('array').lengthOf(1)
    expect(response[0].first_name).to.have.eq(person_fixtures.first_name)
  })

  it("without payload", async () => {
    try {
      await persons.resolve(null, {}, {})
    } catch (err) {
      expect(err.message).to.eq("User is not authenticated")
    }
  })
})
