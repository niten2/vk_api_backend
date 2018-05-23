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
      vkPerson1 = await factory.create('vkPerson', { user_id: user.id, createdAt: moment().add(-10, "days") })
      vkPerson2 = await factory.create('vkPerson', { user_id: user.id, createdAt: moment().add(-5, "days") })
      vkPerson3 = await factory.create('vkPerson', { user_id: user.id, createdAt: moment().add(-2, "days") })

      console.log(vkPerson1.id)
      console.log(vkPerson2.id)
      console.log(vkPerson3.id)

      const variableValues = {
        input: {
          cursor: vkPerson1.createdAt.getTime()
        }
      }

      res = await execGraphql({ query, user, variableValues })
    })

    it("should return vkPerson", async () => {
      // console.log(res)
      console.log(require('util').inspect(res, false, null))




      // expect(res.data.vkPersons.vkPersons).toContainEqual(
      //   expect.objectContaining({
      //     id: vkPerson.id.toString()
      //   })
      // )
    })

    // it.only("should return totalCount", async () => {
    //   expect(res.data.vkPersons.totalCount).toEqual(expect.any(Number))
    // })
  })



  // describe("filter addFriendAt", () => {
  //   let query = `
  //     query vkPersons($input: VkPersonsInput) {
  //       vkPersons(input: $input) {
  //         vkPersons {
  //           ${matchers.vkPerson_attr}
  //         }
  //       }
  //     }
  //   `
  //   let user
  //   let vkPerson
  //   let res

  //   beforeEach(async () => {
  //     user = await factory.create('user')

  //     vkPerson = await factory.create('vkPerson', {
  //       user_id: user.id,
  //       addFriendAt: moment()
  //     })

  //     const variableValues = {
  //       input: {
  //         filter: {
  //           addFriendAt: moment().toISOString(),
  //         }
  //       }
  //     }

  //     res = await execGraphql({ query, user, variableValues })
  //   })

  //   it("should not return vkPerson", async () => {
  //     expect(res.data.vkPersons.vkPersons).toContainEqual(
  //       expect.objectContaining({
  //         id: vkPerson.id.toString()
  //       })
  //     )
  //   })

  // })

// })

// describe("wrong params given", () => {

  // it('should return error', async () => {
  //   const res = await execGraphql({ query, unauth: true })

  //   expect(res.errors).toContainEqual(matchers.errors_json)
  // })

})
