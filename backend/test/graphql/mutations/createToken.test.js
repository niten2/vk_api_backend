import { User } from "app/models"
import { verifyJwt } from "app/services/jwt"

const password = "password"
const query = `
  mutation createToken($input: TokenCreateInput!) {
    createToken(input: $input) {
      token
    }
  }
`

describe('valid params given', async () => {

  it("valid email and password", async () => {
    let user1 = await factory.create('user')
    let user2 = await factory.create('user')
    let user3 = await factory.create('user', { password })

    const variableValues = {
      input: {
        email: user3.email,
        password: password,
      }
    }

    const res = await execGraphql({ query, user: user3, variableValues })

    expect(res.data.createToken.token).toBeDefined()

    const jwt = res.data.createToken.token
    let payload = verifyJwt(jwt)

    expect(payload.user_id).toEqual(user3.id)
  })

})

describe('wrong params given', async () => {

  describe('wrong password', async () => {
    it("password incorrect", async () => {
      let user = await factory.create('user')

      const variableValues = {
        input: {
          email: user.email,
          password: "password",
        }
      }

      const res = await execGraphql({ query, user, variableValues })

      expect(res.errors[0].message).toEqual("wrong password")
    })
  })

  describe('empty user', async () => {
    it("user not found", async () => {
      const variableValues = {
        input: {
          email: "test@test.com",
          password: "password",
        }
      }

      const res = await execGraphql({ query, variableValues })

      expect(res.errors[0].message).toEqual("user not found")
    })
  })

})
