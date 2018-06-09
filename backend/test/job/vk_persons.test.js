import { VkPerson } from "app/models"
import vkPersonsQueue from "app/job/vk_persons"

describe('vkPersonsQueue', () => {
  let mock
  let user
  let vkPerson

  beforeEach(async () => {
    user = await factory.create("user")
    vkPerson = await factory.create("vkPerson")

    const options = {
      data: {
        vkPersonId: vkPerson.id,
        userId: user.id,
      }
    }

    await vkPersonsQueue.handlers.__default__(options)
  })

  it("should update vkPerson", async () => {
    vkPerson = await VkPerson.findById(vkPerson.id)

    const attrs = {
      uid: "id",
      first_name: "first_name",
      last_name: "last_name",
    }

    expect(vkPerson).toEqual(expect.objectContaining(attrs))
  })

})
