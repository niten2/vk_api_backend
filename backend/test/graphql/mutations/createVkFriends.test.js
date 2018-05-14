// import { User } from "app/models"

const query = `
  mutation createVkFriends($input: CreateVkFriendsInput!) {
    createVkFriends(input: $input) {
      uid
      isFriend
    }
  }
`

describe("valid params given", () => {

  describe("user admin", () => {
    let res
    let user
    const ids = "12\n34\n56"

    beforeEach(async () => {
      user = await factory.create('user')

      const variableValues = {
        input: {
          ids,
        }
      }

      res = await execGraphql({ query, variableValues, user })
    })

    it('should have id', async () => {
      expect(res.data.createVkFriends).toContainEqual(
        expect.objectContaining({
          uid: expect.any(String),
          isFriend: expect.any(Boolean),
        })
      )
    })


  })

})
