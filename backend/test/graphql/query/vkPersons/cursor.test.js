import moment from "moment"

let query = `
  query vkPersons($input: VkPersonsInput) {
    vkPersons(input: $input) {
      vkPersons {
        ${matchers.vkPerson_attr}
      }
      cursor
      count
    }
  }
`

describe("valid params given", () => {

  describe("", () => {
    let user
    let vkPerson1
    let vkPerson2
    let vkPerson3
    let res

    beforeEach(async () => {
      user = await factory.create('user')
      vkPerson1 = await factory.create('vkPerson', { id: 1, user_id: user.id, createdAt: moment().add(-10, "days") })
      vkPerson2 = await factory.create('vkPerson', { id: 2, user_id: user.id, createdAt: moment().add(-5, "days") })
      vkPerson3 = await factory.create('vkPerson', { id: 3, user_id: user.id, createdAt: moment().add(-2, "days") })

      const variableValues = {
        input: {
          cursor: vkPerson1.id
        }
      }

      res = await execGraphql({ query, user, variableValues })
    })

    it("should not return vkPerson1", async () => {
      expect(res.data.vkPersons.vkPersons).not.toContainEqual(
        expect.objectContaining({
          id: vkPerson1.id.toString()
        })
      )
    })


    it("should return vkPerson", async () => {
      expect(res.data.vkPersons.vkPersons).toContainEqual(
        expect.objectContaining({
          id: vkPerson2.id.toString()
        })
      )

      expect(res.data.vkPersons.vkPersons).toContainEqual(
        expect.objectContaining({
          id: vkPerson3.id.toString()
        })
      )
    })

    it("should return count", async () => {
      expect(res.data.vkPersons.count).toEqual(3)
    })
  })

})
