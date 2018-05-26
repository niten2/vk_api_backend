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

describe("filter addFriendAt", () => {

  describe("same date", () => {
    let user
    let vkPerson
    let res

    beforeEach(async () => {
      user = await factory.create('user')

      vkPerson = await factory.create('vkPerson', { user_id: user.id, addFriendAt: moment() })

      const variableValues = {
        input: {
          filter: {
            addFriendAt: moment().toISOString(),
          }
        }
      }

      res = await execGraphql({ query, user, variableValues })
    })

    it("should not return vkPerson", async () => {
      expect(res.data.vkPersons.vkPersons).toContainEqual(
        expect.objectContaining({
          id: vkPerson.id.toString()
        })
      )
    })
  })

  describe("not same date", () => {
    let user
    let vkPerson
    let res

    beforeEach(async () => {
      user = await factory.create('user')

      vkPerson = await factory.create('vkPerson', { user_id: user.id, addFriendAt: moment().add(10, "days") })

      const variableValues = {
        input: {
          filter: {
            addFriendAt: moment().toISOString(),
          }
        }
      }

      res = await execGraphql({ query, user, variableValues })
    })

    it("should not return vkPerson", async () => {
      expect(res.data.vkPersons.vkPersons).toEqual([])
    })
  })

})
