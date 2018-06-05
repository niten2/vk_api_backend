import { VkPerson } from "app/models"

const action = "setInfoVkPersons"
const query = `
  mutation setInfoVkPersons {
    setInfoVkPersons {
      message
    }
  }
`

describe("valid params given", () => {

  describe("user admin", () => {
    let res
    let user
    let vkPerson

    beforeEach(async () => {
      user = await factory.create('user')
      vkPerson = await factory.create('vkPerson')

      res = await execGraphql({ query, user })
    })

    it('should return valid response', async () => {
      const attrs = {
        message: "run vkPersonsQueue",
      }

      expect(res.data[action]).toEqual(attrs)
    })
  })

})
