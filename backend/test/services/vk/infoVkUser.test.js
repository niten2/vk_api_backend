import { VkPerson, User } from "app/models"
import { infoVkUser } from "app/services/vk/methods"

describe('test', () => {
  let user
  let vkPerson

  beforeEach(async () => {
    user = await factory.build("user")
    vkPerson = await factory.build("vkPerson")
  })

  it("should return info", async () => {
    let res = await infoVkUser(user, vkPerson)

    expect(res).toEqual({
      uid: "id",
      first_name: "first_name",
      last_name: "last_name",
      deactivated: false,
    })
  })

})
