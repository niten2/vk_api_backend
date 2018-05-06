import moment from "moment"

let query = `
  query vkPersons {
    vkPersons {
      ${matchers.vkPerson_attr}
    }
  }
`

describe("valid params given", () => {

  describe("filter addFriendAt", () => {

    query = `
      query vkPersons($input: VkPersonsInput) {
        vkPersons(input: $input) {
          ${matchers.vkPerson_attr}
        }
      }
    `

    it("should not return vkPerson", async () => {
      let user = await factory.create('user')

      let vkPerson = await factory.create('vkPerson', {
        user_id: user.id,
        addFriendAt: moment()
      })

      const variableValues = {
        input: {
          filter: {
            addFriendAt: moment().toISOString(),
          }
        }
      }

      const res = await execGraphql({ query, user, variableValues })

      expect(res.data.vkPersons).toContainEqual(
        expect.objectContaining({
          id: vkPerson.id.toString()
        })
      )
    })

  })

})

describe("wrong params given", () => {

  it('should return error', async () => {
    const res = await execGraphql({ query, unauth: true })

    expect(res.errors).toContainEqual(matchers.errors_json)
  })

})
