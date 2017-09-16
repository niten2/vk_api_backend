import schema from 'api/graphql/schema'
import { expect } from 'chai'
import { User, Setting } from "api/models"
import { user_fixtures, setting_fixtures } from "spec/fixtures"

const createJwtToken = schema._typeMap.Mutation.getFields().createJwtToken.resolve

describe('mutation createJwtToken', async () => {
  beforeEach(async () => {
    await User.destroy({where: {}, truncate: true})
    await Setting.destroy({where: {}, truncate: true})
  })

  it("valid email and password", async () => {
    let user = await User.create(user_fixtures)
    let args = { input: { email: user.email, password: user.password } }
    let resp = await createJwtToken(null, args, {})
    expect(resp.token).to.be.a("String")
  })

  it("password incorrect", async () => {
    let user = await User.create(user_fixtures)
    let args = { input: { email: user_fixtures.email, password: "invalid password" } }
     try {
      await createJwtToken(null, args, {})
    } catch(err) {
      expect(err.message).to.eq('Email or Password incorrect')
    }
  })

  it("user not found", async () => {
    let args = { input: { email: user_fixtures.email, password: user_fixtures.password } }
     try {
      let z = await createJwtToken(null, args, {})
    } catch(err) {
      expect(err.message).to.eq('Email or Password incorrect')
    }
  })
})
