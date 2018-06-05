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

// describe("wrong params given", () => {

//   describe("user admin", () => {
//     let res
//     let user
//     let vkPerson
//     const ids = "12\n34\n56"

//     beforeEach(async () => {
//       user = await factory.create('user')
//       vkPerson = await factory.create('vkPerson', { uid: 12 })

//       const variableValues = {
//         input: {
//           ids,
//         }
//       }

//       res = await execGraphql({ query, variableValues, user })
//     })

//     it('should return vk person', async () => {

//       expect(res.data.createVkFriends.persons).toContainEqual(
//         expect.objectContaining({
//           uid: expect.any(String),
//           isFriend: expect.any(Boolean),
//           user_id: user.id,
//         })
//       )
//     })

//     it('should have errors', async () => {
//       expect(res.data.createVkFriends.errors).toContainEqual(
//         expect.objectContaining({
//           uid: expect.any(String),
//           message: expect.any(String),
//         })
//       )
//     })

//     it('should create VkPerson', async () => {
//       let vkPersons = await VkPerson.findAll()

//       expect(vkPersons).toContainEqual(
//         expect.objectContaining({
//           uid: "34",
//           isFriend: false,
//           user_id: user.id,
//         })
//       )

//       expect(vkPersons).toContainEqual(
//         expect.objectContaining({
//           uid: "56",
//           isFriend: false,
//           user_id: user.id,
//         })
//       )
//     })
//   })

// })
