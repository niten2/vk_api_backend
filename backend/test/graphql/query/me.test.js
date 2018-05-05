const query = `
  query {
    me {
      ${matchers.user_attr}
    }
  }
`

xdescribe("valid params given", () => {

  xit("test", () => {})

  // it('should return user', async () => {
  //   let user = await factory.create('user')

  //   const res = await execGraphql({ query, user })

  //   expect(res.data.me).toEqual(matchers.user_json)
  //   expect(res.data.me.id).toEqual(user.id.toString())
  // })

})

// describe("wrong params given", () => {

//   it('should return error', async () => {
//     const res = await execGraphql({ query, unauth: true })

//     expect(res.errors).toContainEqual(matchers.errors_json)
//   })

// })
