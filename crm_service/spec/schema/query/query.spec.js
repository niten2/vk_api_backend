import chai, { expect } from 'chai'
import chaiAsPromised from "chai-as-promised"
import { Status, Client } from "api/models"
// import { ApiMutation, ApiQuery } from "./resolvers"
// import { User, Setting } from "api/models"
// import { user_fixtures, setting_fixtures } from "spec/fixtures"

describe('resolvers query', () => {
  // beforeEach(async () => {
  //   await User.destroy({where: {}, truncate: true})
  //   await Setting.destroy({where: {}, truncate: true})
  // })

  describe('clients', () => {
    // beforeEach(async () => {
    //   await User.create(user_fixtures)
    // })

    it("valid params", async () => {
      // let users = await ApiQuery.users()
      // expect(users).to.be.an('array').lengthOf(1)
      // expect(users[0].name).to.have.eq(user_fixtures.name)
      // expect(users[0].email).to.have.eq(user_fixtures.email)
    })

    it("invalid params", async () => {
      // let users = await ApiQuery.users()
      // expect(users).to.be.an('array').lengthOf(1)
      // expect(users[0].name).to.have.eq(user_fixtures.name)
      // expect(users[0].email).to.have.eq(user_fixtures.email)
    })
  })

  // describe('user', () => {
  //   let user, context

  //   beforeEach(async () => {
  //     user = await User.create(user_fixtures)
  //     context = { payload: { user_id: user.id } }
  //   })

  //   it("with payload", async () => {
  //     let user = await ApiQuery.user(null, null, context)
  //     expect(user.name).to.eq(user_fixtures.name)
  //     expect(user.email).to.eq(user_fixtures.email)
  //   })

  //   it("without payload", async () => {
  //     expect(() => ApiQuery.user(null, null, {})).to.throw(Error)
  //   })
  // })

  // describe('settings', () => {
  //   let settings, context

  //   beforeEach(async () => {
  //     await Setting.create(setting_fixtures)
  //     context = { payload: { user_id: 1 } }
  //   })

  //   it("with payload", async () => {
  //     settings = await ApiQuery.settings(null, {}, context)
  //     expect(settings).to.be.an('array').lengthOf(1)
  //     expect(settings[0].name).to.have.eq(setting_fixtures.name)
  //     expect(settings[0].value).to.have.eq(setting_fixtures.value)
  //   })

  //   it("without payload", async () => {
  //     expect(() => ApiQuery.settings(null, {}, {})).to.throw(Error)
  //   })
  // })
})

