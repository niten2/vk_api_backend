import { User } from "app/models"

const query = `
  mutation createUser($input: UserCreateInput!) {
    createUser(input: $input) {
      ${matchers.user_attr}
      token
    }
  }
`

describe("valid params given", () => {

  describe("user admin", () => {
    let res
    let user
    let new_user
    const password = "password"

    beforeEach(async () => {
      user = await factory.create('user')
      new_user = await factory.build('user', { password })

      const variableValues = {
        input: {
          name: new_user.name,
          email: new_user.email,
          password: password,
        }
      }

      res = await execGraphql({ query, variableValues, user })
    })

    it('should have id', async () => {
      expect(res.data.createUser.id).toEqual(expect.any(String))
    })

    it('should have token', async () => {
      expect(res.data.createUser.token).toEqual(expect.any(String))
    })

    it('should create user', async () => {
      new_user = await User.findOne({ name: user.name })

      expect(new_user).toEqual(
        expect.objectContaining({
          name: new_user.name,
          email: new_user.email,
        })
      )
    })

  })

})
