describe("password", () => {
  const password = "password"

  it("should bcrypt password", async () => {
    let user = await factory.create('user', { password })

    expect(user.password).not.toEqual(password)
  })
})
