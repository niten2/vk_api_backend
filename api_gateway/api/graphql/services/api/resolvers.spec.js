import chai, { expect } from 'chai'
import { ApiQuery } from "./resolvers"
import { User } from "api/models"
import { user_fixtures } from "spec/fixtures"

describe('api resolvers', () => {

  describe('users', () => {

    beforeEach(async () => {
      await User.destroy({where: {}})
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
      await User.destroy({where: {}})
      user = await User.create(user_fixtures)
      context = { payload: { user_id: user.id } }
    })

    it("user", async () => {
      let user = await ApiQuery.user(null, null, context)
      expect(user.name).to.eq(user_fixtures.name)
      expect(user.email).to.eq(user_fixtures.email)
    })

  })

})
