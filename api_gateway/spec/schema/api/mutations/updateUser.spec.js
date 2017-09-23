import schema from 'api/graphql/schema'
import { expect } from 'chai'
import { User, Setting } from "api/models"
import { user_fixtures } from "spec/support/fixtures"

const updateUser = schema._typeMap.Mutation.getFields().updateUser.resolve
let user

describe('mutations createUser', () => {
  beforeEach(async () => {
    await User.destroy({where: {}, truncate: true})
    user = await User.create(user_fixtures)
  })

  it("update name", async () => {
    let name = "test"
    const context = { payload: { user_id: user.id } }
    let args = { input: { name: name } }
    let response = await updateUser(null, args, context)

    expect(user.name).to.eq(name)
  })
})
