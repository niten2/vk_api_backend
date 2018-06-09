import { User } from 'app/models'

describe('#coundTodayFriend', () => {
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

describe('#isFriendNeed', () => {
  it("should return false", async () => {
    const user = await factory.create("user")

    const vkPerson = await factory.create("vkPerson", {
      user_id: user.id,
      addFriendAt: new Date(),
    })

    let res = await user.isFriendNeed()

    expect(res).toEqual(true)
  })
})

describe("#comparePassword", () => {
  it("should return true", async () => {
    const password = "password"
    let user = await factory.create('user', { password })

    let res = await user.comparePassword(password)

    expect(res).toBeTruthy()
  })

  it("should return false", async () => {
    const password = "password"
    const other_string = "other_string"
    let user = await factory.create('user', { password })

    expect(await user.comparePassword(other_string)).toBeFalsy()
  })
})

describe("#hasDesiredFriends", () => {
  it("should return true", async () => {
    let user = await factory.create('user')
    let vkPerson = await factory.create('vkPerson', { user_id: user.id, isFriend: false, deactivated: false })

    let res = await user.hasDesiredFriends()

    expect(res).toBeTruthy()
  })

  it("should return false", async () => {
    let user = await factory.create('user')

    let res = await user.hasDesiredFriends()

    expect(res).toEqual(false)
  })
})
