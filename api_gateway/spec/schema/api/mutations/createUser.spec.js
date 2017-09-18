import schema from 'api/graphql/schema'
import { expect } from 'chai'
import { User, Setting } from "api/models"
import { user_fixtures } from "spec/support/fixtures"

const createUser = schema._typeMap.Mutation.getFields().createUser.resolve

describe('mutations createUser', () => {
  beforeEach(async () => {
    await User.destroy({where: {}, truncate: true})
    await Setting.destroy({where: {}, truncate: true})
  })

  it("create user", async () => {
    let args = { input: { name: user_fixtures.name, email: user_fixtures.email, password: user_fixtures.password } }
    let user = await createUser(null, args, {})
    expect(user.name).to.eq(user_fixtures.name)
    expect(user.email).to.eq(user_fixtures.email)
    expect(user.password).to.eq(user_fixtures.password)
  })
})
