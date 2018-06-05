import { VkPerson } from "app/models"
import { infoVkUser } from "app/services/vk/methods"
import { User } from "app/models"
import sinon from "sinon"

const mockVkApi = {
  api: {
    users: {
      get: () => {
        return [{
          first_name: "first_name",
          last_name: "last_name",
        }]
      }
    }
  }
}

describe('test', () => {
  let mockSend
  let user

  beforeEach(async () => {
    user = await factory.build("user", { vk_token: "" })

    mockSend = sinon.stub(user, 'vkApi').returns(mockVkApi)
  })

  afterEach(() => {
    mockSend.restore()
  })

  it("should return info", async () => {
    const person = await factory.build("vkPerson", { uid: "id210536011" })
    let res = await infoVkUser(user, person)

    expect(res).toEqual({
      first_name: "first_name",
      last_name: "last_name",
    })
  })

})
