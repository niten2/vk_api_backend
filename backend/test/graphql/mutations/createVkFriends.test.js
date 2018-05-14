import { VkPerson } from "app/models"

const query = `
  mutation createVkFriends($input: CreateVkFriendsInput!) {
    createVkFriends(input: $input) {
      persons {
        uid
        isFriend
      }
      errors {
        uid
        message
      }
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

    it('should return vk person', async () => {
      expect(res.data.createVkFriends.persons).toContainEqual(
        expect.objectContaining({
          uid: expect.any(String),
          isFriend: expect.any(Boolean),
        })
      )
    })

    it('should create VkPerson', async () => {
      let vkPersons = await VkPerson.findAll()

      expect(vkPersons).not.toEqual([])
    })
  })

})

describe("wrong params given", () => {

  describe("user admin", () => {
    let res
    let user
    let vkPerson
    const ids = "12\n34\n56"

    beforeEach(async () => {
      user = await factory.create('user')
      vkPerson = await factory.create('vkPerson', { uid: 12 })

      const variableValues = {
        input: {
          ids,
        }
      }

      res = await execGraphql({ query, variableValues, user })
    })

    it('should return vk person', async () => {
      expect(res.data.createVkFriends.persons).toContainEqual(
        expect.objectContaining({
          uid: expect.any(String),
          isFriend: expect.any(Boolean),
        })
      )
    })

    it('should have errors', async () => {
      expect(res.data.createVkFriends.errors).toContainEqual(
        expect.objectContaining({
          uid: expect.any(String),
          message: expect.any(String),
        })
      )
    })

    // it('should create VkPerson', async () => {
    //   let vkPersons = await VkPerson.findAll()

    //   expect(vkPersons).not.toEqual([])
    // })
  })

})
