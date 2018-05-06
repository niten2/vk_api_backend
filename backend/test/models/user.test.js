import { User } from 'app/models'

describe('relations', () => {

  describe('VkPerson', () => {

    it("User", async () => {
      const user = await factory.create("user")
      const vkPerson = await factory.create("vkPerson", { user_id : user.id })

      const getVkPerson = await user.getVkPersons()

      expect(getVkPerson[0].id).toEqual(vkPerson.id)
    })
  })

})

describe('instanceMethods', () => {

  describe('coundTodayFriend', () => {
    it("should return one", async () => {
      const user = await factory.create("user")

      const vkPerson = await factory.create("vkPerson", {
        user_id : user.id,
        addFriendAt: new Date(),
      })

      let res = await user.countTodayFriend()

      expect(res).toEqual(1)
    })
  })

  describe.only('friendNotEnough', () => {
    it("should return false", async () => {
      const user = await factory.create("user")

      const vkPerson = await factory.create("vkPerson", {
        user_id : user.id,
        addFriendAt: new Date(),
      })


      let res = await user.friendNotEnough()

      expect(res).toEqual(false)
    })
  })

})
