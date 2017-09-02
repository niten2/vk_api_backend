import chai, { expect } from 'chai'
import { Status, Client } from "api/models"

describe('vk api mutations', () => {

  describe('createClient', async () => {
    beforeEach(async () => {
      // await User.destroy({where: {}, truncate: true})
      // await Setting.destroy({where: {}, truncate: true})
    })

    it("valid", async () => {
  //     let user = await User.create(user_fixtures)
  //     let args = { input: { email: user.email, password: user.password } }
  //     let resp = await ApiMutation.createJwtToken(null, args, {})
  //     expect(resp.token).to.be.a("String")
    })

  //   it("password incorrect", async () => {
  //     let user = await User.create(user_fixtures)
  //     let args = { input: { email: user_fixtures.email, password: "invalid password" } }
  //      try {
  //       await ApiMutation.createJwtToken(null, args, {})
  //     } catch(err) {
  //       expect(err.message).to.eq('Email or Password incorrect')
  //     }
  //   })

  //   it("user not found", async () => {
  //     let args = { input: { email: user_fixtures.email, password: user_fixtures.password } }
  //      try {
  //       let z = await ApiMutation.createJwtToken(null, args, {})
  //        console.log(z)
  //     } catch(err) {
  //       expect(err.message).to.eq('Email or Password incorrect')
  //     }
  //   })
  })

})
