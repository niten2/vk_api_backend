import chai, { expect } from 'chai'
import chaiAsPromised from "chai-as-promised"
import { ApiMutation, ApiQuery } from "./resolvers"
import { User, Setting } from "api/models"
import { user_fixtures, setting_fixtures } from "spec/fixtures"
import { createJwt } from "api/services/jwt"

describe('api resolvers', () => {
  beforeEach(async () => {
    await User.destroy({where: {}})
    await Setting.destroy({where: {}})
  })

  describe('users', () => {
    beforeEach(async () => {
      await User.create(user_fixtures)
    })

    it("users", async () => {
      let users = await ApiQuery.users()
      expect(users).to.be.an('array').lengthOf(1)
      expect(users[0].name).to.have.eq(user_fixtures.name)
      expect(users[0].email).to.have.eq(user_fixtures.email)
    })
  })

  describe('user', () => {
    let user, context

    beforeEach(async () => {
      user = await User.create(user_fixtures)
      context = { payload: { user_id: user.id } }
    })

    it("with payload", async () => {
      let user = await ApiQuery.user(null, null, context)
      expect(user.name).to.eq(user_fixtures.name)
      expect(user.email).to.eq(user_fixtures.email)
    })

    it("without payload", async () => {
      expect(() => ApiQuery.user(null, null, {})).to.throw(Error)
    })
  })

  describe('settings', () => {
    let settings, context

    beforeEach(async () => {
      await Setting.create(setting_fixtures)
      context = { payload: { user_id: 1 } }
    })

    it("with payload", async () => {
      settings = await ApiQuery.settings(null, {}, context)
      expect(settings).to.be.an('array').lengthOf(1)
      expect(settings[0].name).to.have.eq(setting_fixtures.name)
      expect(settings[0].value).to.have.eq(setting_fixtures.value)
    })

    it("without payload", async () => {
      expect(() => ApiQuery.settings(null, {}, {})).to.throw(Error)
    })
  })

})

describe('api mutations', () => {
  beforeEach(async () => {
    await User.destroy({where: {}})
    await Setting.destroy({where: {}})
  })

  describe('createJwtToken', async () => {
    it("valid email and password", async () => {
      let user = await User.create(user_fixtures)
      let args = { input: { email: user_fixtures.email, password: user_fixtures.password } }
      let resp = await ApiMutation.createJwtToken(null, args, {})
      expect(resp.token).to.eq(createJwt(user))
    })

    it("password incorrect", async () => {
      let user = await User.create(user_fixtures)
      let args = { input: { email: user_fixtures.email, password: "test" } }
       try {
        await ApiMutation.createJwtToken(null, args, {})
      } catch(err) {
        expect(err.message).to.eq('Email or Password incorrect')
      }
    })

    it("user not found", async () => {
      let args = { input: { email: user_fixtures.email, password: user_fixtures.password } }
       try {
        await ApiMutation.createJwtToken(null, args, {})
      } catch(err) {
        expect(err.message).to.eq('Email or Password incorrect')
      }
    })
  })

  describe('createUser', () => {
    it("create user", async () => {
      let args = { input: { name: user_fixtures.name, email: user_fixtures.email, password: user_fixtures.password } }
      let user = await ApiMutation.createUser(null, args, {})
      expect(user.name).to.eq(user_fixtures.name)
      expect(user.email).to.eq(user_fixtures.email)
      expect(user.password).to.eq(user_fixtures.password)
    })
  })

  describe('updateUser', () => {
    // # TODO
  })

  describe('createSetting', () => {
    // # TODO
  })

  describe('updateSetting', () => {
    // # TODO
  })

})
